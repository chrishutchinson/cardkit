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
          Element.prototype.altDrag = function() {
            this.drag(dragMove, dragStart, dragEnd);
            return this;
          };

          var dragStart = function () {
            this.data('ot', this.transform().local);
          };

          var dragMove = function(dx, dy) {
            var tdx, tdy;
            var snapInvMatrix = this.transform().diffMatrix.invert();
            snapInvMatrix.e = snapInvMatrix.f = 0;
            tdx = snapInvMatrix.x(dx, dy);
            tdy = snapInvMatrix.y(dx, dy);

            // snapping
            var gridSize = scope.svgConfig.canvas.gridSize();
            tdx = Math.round(tdx/gridSize) * gridSize;
            tdy = Math.round(tdy/gridSize) * gridSize;

            this.transform(this.data('ot') + 't' + [tdx, tdy]);
          };

          var dragEnd = function() {
          };
        });

        // Generate all our styles and put them inside the <defs> attribute of the SVG
        // This is done as early as possible to ensure all webfonts declared via @font-face are included appropriately
        // @TODO: Find a smarter way of defining any external fonts via config, and process them here
        var stylesElement;
        var css;
        var canvasData;
        var background;
        var elements;
        var el;
      	var s;
        var filters;

          s = snapSVG(element[0].children[0]);
          s.attr({
            height: '100%',
            width: '100%',
          });
          stylesElement = s.paper.el('style', {
            type: 'text/css'
          });
          css =styles(s.node);
          stylesElement.node.innerHTML = css;
          stylesElement.toDefs();

        function init() {
          // Setup canvas background
          canvasData = functionise(data.canvas);
        	background = s.rect(0, 0, canvasData.width, canvasData.height, 0, 0).attr(canvasData);
          if(canvasData.draggable === true) {
            background.altDrag();
          }
          elements = [];
        }

        init();

        // Create us some filters for later use

        function setupFilters() {
          // Store filters
          filters = {
            'Sepia': s.paper.filter(snapSVG.filter.sepia(1)).attr({
              width: canvasData.width*4 + 'px',
              height: canvasData.height*4 + 'px'
            }),
            'FTPink': s.paper.filter('<feColorMatrix type="matrix" in="SourceGraphic" result="blackAndWhiteFilter" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" />' +
            '<feFlood result="pinkFilter" flood-color="#ffc99f"></feFlood><feBlend mode="multiply" in="pinkFilter" in2="blackAndWhiteFilter"></feBlend>').attr({
              width: canvasData.width*4 + 'px',
              height: canvasData.height*4 + 'px',
              'background-blend-mode': 'multiply'
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
            })
          };
        }

        setupFilters();


        // The function that sets up the element with the required settings
        function setupElement(element) {
      		var el;
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

        // use smart quotes
        function smartquotesString(str) {
          return str
            .replace(/'''/g, '\u2034')                                                   // triple prime
            .replace(/(\W|^)"(\S)/g, '$1\u201c$2')                                       // beginning "
            .replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g, '$1\u201d$2')          // ending "
            .replace(/([^0-9])"/g,'$1\u201d')                                            // remaining " at end of word
            .replace(/''/g, '\u2033')                                                    // double prime
            .replace(/(\W|^)'(\S)/g, '$1\u2018$2')                                       // beginning '
            .replace(/([a-z])'([a-z])/ig, '$1\u2019$2')                                  // conjunction's possession
            .replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/ig, '$1\u2019$3')                 // ending '
            .replace(/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/ig, '\u2019$2$3')     // abbrev. years like '93
            .replace(/(\B|^)\u2018(?=([^\u2019]*\u2019\b)*([^\u2019\u2018]*\W[\u2019\u2018]\b|[^\u2019\u2018]*$))/ig, '$1\u2019') // backwards apostrophe
            .replace(/'/g, '\u2032');
        }

        // Setup our atrribtes on the specific element
        function setAttributes(el, element) {
          var attrs = functionise(element);
          var elementData = attrs;
          delete elementData.$$hashKey;
          if(elementData.type === 'text') {
            elementData.text = smartquotesString(elementData.text);
            elementData.text = elementData.text.split('\n');
          }
          if (elementData.textTransform) {
            el.node.style.textTransform = elementData.textTransform;
          }
          el.attr(elementData);

          if(elementData.type === 'text') {
            el.selectAll('tspan').forEach(function(tspan, i){
              tspan.attr({
                x: elementData.x,
                y: elementData.y + (elementData.fontSize*i)});
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

              // If the type is image
              if(el.type === 'image') {
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
              }

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
	      			elements.push(el);
	      		}

	      		// Update the attributes (e.g. text and colours) based on config data
	      		var elementData = element;
	      		delete elementData.$$hashKey;

	      		// Update the element!
            setAttributes(el, element);

    				// Check if we're to enable dragging
    				if(element.draggable === true) {
    					// We have to 'undrag' the element here, because they can get choppy after a few redraws otherwise
    					el.undrag();

    					// Drag dat
    					el.altDrag();
    				}
    			});
      	}

        function resetSvg() {
          var els = s.selectAll('*');
          angular.forEach(els, function(e) {
            e.transform('');
          });
        }

      	// Watch for changes on the scope and the theme, and redraw
        scope.$watch('svgConfig', drawElements, true);
        scope.$on('changeTheme', drawElements);
        scope.$on('changeTemplate', function() {
          init();
          drawElements();
        });
        scope.$on('changeSize', function() {
          init();
          drawElements();
        });
        scope.$on('changeSize', setupFilters);
        scope.$on('resetSvg', resetSvg);
      }
    };
  });
