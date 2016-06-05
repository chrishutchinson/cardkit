'use strict';

/**
 * @ngdoc directive
 * @name cardkitApp.directive:snapSvg
 * @description
 * # snapSvg
 */
angular.module('cardkitApp')
  .directive('snapSvg', function (snapSVG) {
    return {
      template: '<svg id="snap-svg"></svg>',
      restrict: 'E',
      scope: {
        svgConfig: '=',
        svgTheme: '=',
      },
      link: function postLink(scope, element) {
        // Check for functions in the config, and resolve them
        function functionise(element) {
          var attrs = {};
          for(var item in element) {
            switch(typeof element[item]) {
              case 'function':
                attrs[item] = element[item]();
                break;
              default:
                attrs[item] = element[item];
                break;
            }
          }

          return attrs;
        }

        // Inlines all styles
        function styles(el, selectorRemap) {
          var css = '';
          var sheets = document.styleSheets;
          for (var i = 0; i < sheets.length; i++) {
            if (isExternal(sheets[i].href)) {
              console.warn('Cannot include styles from other hosts: ' + sheets[i].href);
              continue;
            }
            var rules = sheets[i].cssRules;
            if (rules !== null) {
              for (var j = 0; j < rules.length; j++) {
                var rule = rules[j];
                if (typeof(rule.style) !== 'undefined') {
                  try {
                    var matches = el.querySelectorAll(rule.selectorText);
                    if (matches.length > 0) {
                      var selector = selectorRemap ? selectorRemap(rule.selectorText) : rule.selectorText;
                      css += selector + ' { ' + rule.style.cssText + ' }\n';
                    } else if(rule.cssText.match(/^@font-face/)) {
                      css += rule.cssText + '\n';
                    }
                  } catch (e) {
                    // Do nothing
                  }
                }
              }
            }
          }
          return css;
        }

        // Checks for external files and ignores them
        function isExternal(url) {
          return url && url.lastIndexOf('http',0) === 0 && url.lastIndexOf(window.location.host) === -1;
        }

      	// Destringify the JSON object
        var data = angular.fromJson(scope.svgConfig);

        // Custom SVG Drag function, given that we scale the SVG
        snapSVG.plugin(function(Snap, Element) {
          Element.prototype.altDrag = function(x, y) {
            if(x && y) {
              this.drag(dragMoveAll, dragStart, dragEnd);
            } else if(x && !y) {
              this.drag(dragMoveX, dragStart, dragEnd);
            } else if(!x && y) {
              this.drag(dragMoveY, dragStart, dragEnd);
            }

            return this;
          };

          var dragStart = function () {
            this.data('ot', this.transform().local);
            s.elementDragging = true;
          };

          var dragMoveAll = function(dx, dy) {
            var tdx, tdy;
            var snapInvMatrix = this.transform().diffMatrix.invert();
            snapInvMatrix.e = snapInvMatrix.f = 0;
            tdx = snapInvMatrix.x(dx, dy);
            tdy = snapInvMatrix.y(dx, dy);
            this.transform(this.data('ot') + 't' + [tdx, tdy]);

            if(this.hoverRect) {
              this.hoverRect.transform('t' + [0, 0] + 't' + [tdx, tdy]);
            }
          };

          var dragMoveX = function(dx, dy) {
            var tdx, tdy;
            var snapInvMatrix = this.transform().diffMatrix.invert();
            snapInvMatrix.e = snapInvMatrix.f = 0;
            tdx = snapInvMatrix.x(dx, dy);
            tdy = snapInvMatrix.y(dx, dy);
            this.transform(this.data('ot') + 't' + [tdx, 0]);

            if(this.hoverRect) {
              this.hoverRect.transform('t' + [0, 0] + 't' + [tdx, 0]);
            }
          };

          var dragMoveY = function(dx, dy) {
            var tdx, tdy;
            var snapInvMatrix = this.transform().diffMatrix.invert();
            snapInvMatrix.e = snapInvMatrix.f = 0;
            tdx = snapInvMatrix.x(dx, dy);
            tdy = snapInvMatrix.y(dx, dy);
            this.transform(this.data('ot') + 't' + [0, tdy]);

            if(this.hoverRect) {
              this.hoverRect.transform('t' + [0, 0] + 't' + [0, tdy]);
            }
          };

          var dragEnd = function() {
            s.elementDragging = false;

            // We have to get the hover rectangle bounding box, store it, remove it, and add it again using the bounding box.
            //  This prevents weird issues with the rectangle not positioning itself correctly if the user drags again without
            //  un-hovering.
            if(this.hoverRect) {
              var hoverBBox = this.hoverRect.getBBox();
              this.hoverRect.remove();
              this.hoverRect = s.rect(hoverBBox.x, hoverBBox.y, hoverBBox.width, hoverBBox.height, 0, 0).attr({
                fill: 'rgba(0, 0, 0, 0.05)'
              });
              this.before(this.hoverRect);
            }

            // Elements, which have `draggablex = false`, can be unhovered by moving horizontally the cursor during dragging.
            // It is also true that `draggabley = false` and moving the cursor vertically
            // At the moment, the hoverRect is not removed correctly. This prevents unexpected proliferations of hoverRect
            if(this.unhoveringDuringDragging){
              this.hoverRect.remove();
              this.unhoveringDuringDragging = false;
            }
          };
        });

      	// Setup element
      	var s = snapSVG(element[0].children[0]);
        s.attr({
          height: '100%',
          width: '100%',
        });

        // Generate all our styles and put them inside the <defs> attribute of the SVG
        // This is done as early as possible to ensure all webfonts declared via @font-face are included appropriately
        // @TODO: Find a smarter way of defining any external fonts via config, and process them here
        var stylesElement = s.paper.el('style', {
          type: 'text/css'
        });
        var css = styles(s.node);
        stylesElement.node.innerHTML = css;
        stylesElement.toDefs();

      	// Setup canvas background
        var canvasData = functionise(data.canvas);
      	var background = s.rect(0, 0, canvasData.width, canvasData.height, 0, 0).attr(canvasData);
      	if(canvasData.draggable === true) {
      		background.altDrag(true, true);
      	}

        // Create us some filters for later use
        var filters;
        function setupFilters() {
          // Store filters
          filters = {
            'Sepia': s.paper.filter(snapSVG.filter.sepia(1)).attr({
              width: canvasData.width*4 + 'px',
              height: canvasData.height*4 + 'px'
            }),
            'Grayscale': s.paper.filter(snapSVG.filter.grayscale(1)).attr({
              width: canvasData.width*4 + 'px',
              height: canvasData.height*4 + 'px'
            }),
            'Saturate': s.paper.filter(snapSVG.filter.saturate(0.5)).attr({
              width: canvasData.width*4 + 'px',
              height: canvasData.height*4 + 'px'
            }),
            'Invert': s.paper.filter(snapSVG.filter.invert(1)).attr({
              width: canvasData.width*4 + 'px',
              height: canvasData.height*4 + 'px'
            }),
            'Blur': s.paper.filter(snapSVG.filter.blur(4, 4)).attr({
              width: canvasData.width*4 + 'px',
              height: canvasData.height*4 + 'px'
            }),
          };
        }
        setupFilters();

      	// Setup some element variables
      	var elements = {},
      		  el;

      	// The function that sets up the element with the required settings
      	function setupElement(element) {
      		var el;

          // If elements should be attached on the Y axis
          if(element.yAttach) {
            if(angular.isObject(element.yAttach)) {
              var attachElement = scope.svgConfig.elements[element.yAttach.element];
              var attachOffset = element.yAttach.offset || 0;
            } else {
              var attachElement = scope.svgConfig.elements[element.yAttach];
              var attachOffset = 0;
            }

            var attachText = attachElement.text.split('\n');
            var attachY = attachElement.y;

            var lineHeight;
            switch(typeof attachElement.lineHeight) {
              case 'function':
                lineHeight = attachElement.lineHeight();
                break;
              default:
                lineHeight = attachElement.lineHeight;
                break;
            }

            var elementValue = (attachText.length*(lineHeight || attachElement.fontSize)) + attachY + attachOffset;
            element.y = elementValue;
          }

          element = functionise(element);

      		switch(element.type) {
      			case 'text':
					    el = s.text(element.x, element.y);
      				break;
      			case 'image':
      				el = s.image(element.src, element.x, element.y, element.width, element.height);
      				break;
      			case 'rect':
      				el = s.rect(element.x, element.y, element.width, element.height, 0, 0);
      				break;
      			case 'circle':
      				break;
      			case 'group':
      				var gEl;
      				el = '';
      				angular.forEach(element.elements, function(e, k) {
      					gEl = setupElement(e);
                setAttributes(gEl, e);

        			  if(k === 0) {
      						el = s.group(gEl);
    						} else {
      						el.group(gEl);
      					}
      				});
      				break;
      			default:
      				return false;
      		}

          /** Filters **/
          if(typeof element.defaultFilter !== 'undefined') {
            if(element.defaultFilter !== '') {
              el.attr({
                filter: filters[element.defaultFilter]
              });
            } else {
              el.attr({
                filter: ''
              });
            }
        	}

          return el;
        }

        // Setup our atrribtes on the specific element
        function setAttributes(el, element) {
          var attrs = functionise(element);
          var elementData = attrs;
          delete elementData.$$hashKey;
          if(elementData.type === 'text') {
            elementData.text = elementData.text.split('\n');
          }

          if(angular.isObject(elementData.draggable)) {
            elementData.draggablex = elementData.draggable.x;
            elementData.draggabley = elementData.draggable.y;
          }

          el.attr(elementData);

          if(elementData.type === 'text') {
            el.selectAll('tspan').forEach(function(tspan, i){
              tspan.attr({x: elementData.x, y: elementData.y + ((elementData.lineHeight || elementData.fontSize)*i)});
            });
          }

          return el;
        }

      	// Draw the elements on the SVG
      	function drawElements() {
          // Make changes to the canvas
          var canvasData = functionise(scope.svgConfig.canvas);

          s.attr({
            viewBox: '0, 0, ' + canvasData.width + ', ' + canvasData.height,
            'data-width': canvasData.width,
            'data-height': canvasData.height
          });
          setAttributes(background, scope.svgConfig.canvas);

          var matrix;

          // Loop through all elements
	      	angular.forEach(scope.svgConfig.elements, function(element, key) {
            // Check if we have setup the element already
	      		if(typeof elements[key] !== 'undefined') {
	      			// The element already exists
	      			el = elements[key];

              // Store matrix transformation, we'll need it later to prevent the image moving around the SVG when replaced
              matrix = el.matrix;

              // Create new element based on config
              var newEl = setupElement(scope.svgConfig.elements[key]);

              if(newEl === false) {
                return;
              }

              // Place new element directly after old one
              el.after(newEl);

              // Apply matrix transformation from previous element
              newEl.transform(matrix);

              // Destroy old element
              el.remove();

              el = newEl;

              // Add the created element to a list of elements
              elements[key] = el;

              if(el.type === 'g') {
                // Store matrix transformation, we'll need it later to prevent the group moving around the SVG when replaced
                matrix = el.matrix;

                // Destroy and recreate
                el.remove();

                // Create new element based on config
                el = setupElement(scope.svgConfig.elements[key]);

                if(el === false) {
                  return;
                }

                // Apply matrix transformation from previous element
                el.transform(matrix);

                // Add the created element to a list of elements
                elements[key] = el;
              }
	      		} else {
              // Create new element based on config
      			  el = setupElement(element);

	      			if(el === false) {
	      				return;
	      			}

	      			// Add the created element to a list of elements
	      			elements[key] = el;
	      		}

            if(element.draggable) {
              el.hover(function(e) {
                if(!s.elementDragging && element.showHoverArea) {
                  var bBox = this.getBBox();
                  this.hoverRect = s.rect(bBox.x, bBox.y, bBox.width, bBox.height, 0, 0).attr({
                    fill: 'rgba(0, 0, 0, 0.05)'
                  });
                  this.before(this.hoverRect);
                }
                if(s.elementDragging && element.showHoverArea) {
                  this.unhoveringDuringDragging = false;
                }
              }, function(e) {
                if(!s.elementDragging && element.showHoverArea && this.hoverRect) {
                  this.hoverRect.remove();
                }
                if(s.elementDragging && element.showHoverArea && this.hoverRect) {
                  this.unhoveringDuringDragging = true;
                }
              });
            }

	      		// Update the attributes (e.g. text and colours) based on config data
	      		var elementData = element;
	      		delete elementData.$$hashKey;

	      		// Update the element!
            setAttributes(el, element);

    				// Check if we're to enable dragging
    				if(element.draggable) {
    					// We have to 'undrag' the element here, because they can get choppy after a few redraws otherwise
    					el.undrag();

              if(angular.isObject(element.draggable)) {
                // Drag dat
                el.altDrag(element.draggable.x, element.draggable.y);
              } else {
                el.altDrag(true, true);
              }
    				}
    			});
      	}

        function resetSvg() {
          var els = s.selectAll('*');
          angular.forEach(els, function(e, i) {
            e.transform('');
          });
        }

      	// Watch for changes on the scope and the theme, and redraw
        scope.$watch('svgConfig', drawElements, true);
        scope.$on('changeTheme', drawElements);
        scope.$on('changeSize', drawElements);
        scope.$on('changeSize', setupFilters);
        scope.$on('resetSvg', resetSvg);
      }
    };
  });
