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
        svgTheme: '='
      },
      link: function postLink(scope, element) {
      	// Destringify the JSON object
        var data = angular.fromJson(scope.svgConfig);

      	// Setup element
      	var s = snapSVG(element[0].children[0]);

      	// Setup canvas background
      	var background = s.rect(0, 0, data.canvas.width, data.canvas.height, 0, 0).attr(data.canvas);
      	if(data.canvas.draggable === true) {
      		background.drag();
      	}

      	// Setup some element variables
      	var elements = [],
      		el;

      	// The function that sets up the element with the required settings
      	function setupElement(element) {
      		var el;

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
      					switch(e.type) {
  							case 'text':
								gEl = s.text(element.x, element.y);
								break;
      						case 'circle':
      							gEl = s.circle(element.x, element.y, e.radius);
      							break;
      						default:
      							return false;
      					}

      					gEl.attr(e);

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

      		return el;
      	}

      	// Draw the elements on the SVG
      	function drawElements() {
          var canvasAttrs = {};
          for(var item in scope.svgConfig.canvas) {
            switch(typeof scope.svgConfig.canvas[item]) {
              case 'function':
                canvasAttrs[item] = scope.svgConfig.canvas[item]();
                break;
              default:
                canvasAttrs[item] = scope.svgConfig.canvas[item];
                break;
            }
          }
          background.attr(canvasAttrs);

          // Loop through all elements
	      	angular.forEach(scope.svgConfig.elements, function(element, key) {
          	// Check if we have setup the element already
	      		if(typeof elements[key] !== 'undefined') {
	      			// The element already exists
	      			el = elements[key];

              // If the type is image
              if(el.type === 'image') {
                // Store matrix transformation, we'll need it later to prevent the image moving around the SVG when replaced 
                var matrix = el.matrix;

                // Destroy and recreate
                el.remove();
                
                // Create new element based on config
                el = setupElement(element);
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

    				el.attr(attrs);

    				// Check if we're to enable dragging
    				if(element.draggable === true) {
    					// We have to 'undrag' the element here, because they can get choppy after a few redraws otherwise
    					el.undrag();

    					// Drag dat
    					el.drag();
    				}
    			});
      	}

      	// Watch for changes on the scope, and redraw
        scope.$watch('svgConfig', drawElements, true);
        scope.$on('changeTheme', drawElements);
      }
    };
  });
