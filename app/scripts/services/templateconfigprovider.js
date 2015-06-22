'use strict';

/**
 * @ngdoc provider
 * @name cardkitApp.templateConfigProvider
 * @description
 * # templateConfigProvider
 * Loads the available templates
 */
angular.module('cardkitApp')
  .provider('templateConfigProvider', function() {
    return {
      $get: function() {
        return ([{
          name: 'Quote',
          elements: function($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 7,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width;
              },
              fill: function() {
                return $scope.theme.background;
              },
              editable: {
                fill: 'picker'
              }
            }, {
              name: 'Image',
              type: 'image',
              width: 600,
              controlsOrder: 4,
              height: function() {
                return this.width;
              },
              src: '',
              opacity: 1,
              x: '0%',
              y: '0%',
              preserveAspectRatio: 'xMinYMin meet',
              draggable: true,
              defaultFilter: '',
              editable: {
                src: true,
                width: true,
                opacity: true,
                filters: [
                  'Sepia',
                  'Grayscale',
                  'Saturate',
                  'Invert',
                  'Blur'
                ],
              }
            }, {
              name: 'Cross Reference Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.gridSize * 3;
              },
              width: function() {
                return $scope.size.width;
              },
              y: function() {
                return $scope.size.height - this.height();
              },
              fill: function() {
                return $scope.theme.xrefBackground;
              },
              editable: {
                fill: 'picker'
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.logoSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 3);
              },
              y: function() {
                var h = ($scope.size.gridSize) / 2;
                return $scope.size.height - (this.height() + h);
              },
              // x: 500,
              // y: 150,
              preserveAspectRatio: 'xMinYMin meet',
              editable: {
                src: true,
                width: true,
                opacity: true
              },
              draggable: false
            }, {
              name: 'Cross Reference Text',
              type: 'text',
              text: 'Read more at: Insert name here',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize);
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Large (18px)': 18,
                },
                fill: 'picker',
                textAnchor: true
              },
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Credit: Insert name here',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 18,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: 15,
              y: 250,
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Large (18px)': 18,
                },
                fill: 'picker',
                textAnchor: true
              },
            }, {
              name: 'Headline',
              type: 'text',
              text: 'Edit this text, and drag it around.\n\nYou can upload your own background image,\nlogo, and change the colour of the text too.',
              fill: function() {
                return $scope.theme.quote;
              },
              controlsOrder: 1,
              fontSize: 32,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: 15,
              y: 45,
              fontWeight: 600,
              draggable: true,
              editable: {
                text: true,
                fill: 'picker',
                textAnchor: true,
                fontSize: {
                  'Small (26px)': 26,
                  'Medium (32px)': 32,
                  'Large (40px)': 40,
                  'X-Large (50px)': 50,
                },
              },
            }];
          }
        }, {
          name: 'Quote Big',
          elements: function($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 7,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width;
              },
              fill: function() {
                return $scope.theme.background;
              }
            }, {
              name: 'Cross Reference Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.gridSize * 3;
              },
              width: function() {
                return $scope.size.width;
              },
              y: function() {
                return $scope.size.height - this.height();
              },
              fill: function() {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.logoSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 3);
              },
              y: function() {
                var h = ($scope.size.gridSize) / 2;
                return $scope.size.height - (this.height() + h);
              },
              // x: 500,
              // y: 150,
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Cross Reference Text',
              type: 'text',
              text: 'Read more at: Insert name here',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize);
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Large (18px)': 18,
                },
                fill: 'picker',
                textAnchor: true
              },
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Ogden Nash',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 18,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: function() {
                return $scope.size.gridSize;
              },
              y: 235,
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Large (18px)': 18,
                }
              },
            }, {
              name: 'Quote',
              type: 'text',
              text: '‘Bankers are just like\neverybody else.\nExcept richer’',
              fill: function() {
                return $scope.theme.quote;
              },
              controlsOrder: 1,
              fontSize: 60,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.gridSize*4;
              },
              fontWeight: 600,
              draggable: true,
              editable: {
                text: true,
                fill: 'picker',
                textAnchor: true,
                fontSize: {
                  'Small (50px)': 50,
                  'Medium (60px)': 60,
                  'Large (72px)': 72,
                },
              },
            }];
          }
        },{
          name: 'Quote With Headshot',
          elements: function($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 7,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width;
              },
              fill: function() {
                return $scope.theme.background;
              }
            }, {
              name: 'Image',
              type: 'image',
              width: 300,
              controlsOrder: 4,
              height: function() {
                return this.width;
              },
              src: function() {
                return $scope.theme.headshotSrc || '';
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - (this.width + $scope.size.gridSize);
              },
              y: function() {
                return $scope.size.gridSize;
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: true,
              defaultFilter: '',
              editable: {
                src: true,
                width: true,
                opacity: true,
                filters: [
                  'Sepia',
                  'Grayscale',
                  'Saturate',
                  'Invert',
                  'Blur'
                ],
              }
            }, {
              name: 'Cross Reference Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.gridSize * 3;
              },
              width: function() {
                return $scope.size.width;
              },
              y: function() {
                return $scope.size.height - this.height();
              },
              fill: function() {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.logoSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 3);
              },
              y: function() {
                var h = ($scope.size.gridSize) / 2;
                return $scope.size.height - (this.height() + h);
              },
              // x: 500,
              // y: 150,
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Cross Reference Text',
              type: 'text',
              text: 'Read more at: Insert name here',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize);
              },
              fontWeight: 500,
              draggable: false,
              editable: {
                text: true
              },
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Janan Ganesh on why\nLabour is Terrible',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 18,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: 15,
              y: 235,
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Large (18px)': 18,
                },
                fill: 'picker',
                textAnchor: true
              },
            }, {
              name: 'Headline',
              type: 'text',
              text: 'Friendship is constant\nin all other things save in\nthe office and affairs of\nlove: Therefore, all hearts\nin love use their own',
              fill: function() {
                return $scope.theme.quote;
              },
              controlsOrder: 1,
              fontSize: 32,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: 15,
              y: 45,
              fontWeight: 600,
              draggable: true,
              editable: {
                text: true,
                fill: 'picker',
                textAnchor: true,
                fontSize: {
                  'Small (26px)': 26,
                  'Medium (32px)': 32,
                  'Large (40px)': 40,
                  'X-Large (50px)': 50,
                },
              },
            }];
          }
        }, {
          name: 'Big Number',
          elements: function($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 7,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width;
              },
              fill: function() {
                return $scope.theme.background;
              }
            }, {
              name: 'Cross Reference Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.gridSize * 3;
              },
              width: function() {
                return $scope.size.width;
              },
              y: function() {
                return $scope.size.height - this.height();
              },
              fill: function() {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.logoSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 3);
              },
              y: function() {
                var h = ($scope.size.gridSize) / 2;
                return $scope.size.height - (this.height() + h);
              },
              // x: 500,
              // y: 150,
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Cross Reference Text',
              type: 'text',
              text: 'Read more at: Insert name here',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize);
              },
              fontWeight: 500,
              draggable: false,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Large (18px)': 18,
                }
              },
            }, {
              name: 'Explanatory Text',
              type: 'text',
              text: 'Explanatory text goes here like this and\nlike this which is 32/34, over two or three\nlines',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 32,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              x: 15,
              y: 170,
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (32px)': 32,
                  'Large (34px)': 34,
                },
                textAnchor: true
              },
            }, {
              name: 'Big Number',
              type: 'text',
              text: '100px',
              fill: function() {
                return $scope.theme.highlightColor;
              },
              controlsOrder: 1,
              fontSize: 100,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: 15,
              y: 100,
              fontWeight: 600,
              draggable: true,
              editable: {
                text: true,
                fill: 'picker',
                textAnchor: true,
              },
            }];
          }
        }, {
          name: 'Graph with Explanation',
          elements: function($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 7,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width;
              },
              fill: function() {
                return $scope.theme.background;
              }
            }, {
              name: 'Side Explanation Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width * 0.3;
              },
              y: '0%',
              x: function() {
                return $scope.size.width - this.width();
              },
              fill: function() {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.logoSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 3);
              },
              y: function() {
                var h = ($scope.size.gridSize);
                return $scope.size.height - (this.height() + h);
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Ref Text',
              type: 'text',
              text: 'FT.COM/\nCOMPANIES',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 18,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                var w = $scope.size.width;
                return (w - w*0.3) + $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize*2);
              },
              fontWeight: 500,
              draggable: false,
            }, {
              name: 'Explanatory Text',
              type: 'text',
              text: 'This is 180px\nwide explanation\ntext for the chart.\nShould run short\nbut max depth on\nthis grid for text\nis 225px box, with\n15px padding',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 24,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              width: function () {
                return $scope.size.width * 0.3;
              },
              x: function() {
                var w = $scope.size.width;
                return (w - w*0.3) + $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.gridSize*2;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (32px)': 32,
                  'Large (34px)': 34,
                },
                textAnchor: true
              },
            }, {
              name: 'Graph',
              type: 'image',
              width: function() {
                return $scope.size.width * 0.6;
              },
              controlsOrder: 4,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }

                if (h > ($scope.size.height-$scope.size.gridSize*2)) {
                  h = $scope.size.height-$scope.size.gridSize*2;
                }
                return h;
              },
              src: function() {
                return $scope.theme.graphSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.gridSize;
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: true,
              defaultFilter: '',
              editable: {
                src: true,
                width: true,
                opacity: true,
                filters: [
                  'Sepia',
                  'Grayscale',
                  'Saturate',
                  'Invert',
                  'Blur'
                ],
              }
            }];
          }
        }, {
          name: 'Breaking News',
          elements: function($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 7,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width;
              },
              fill: function() {
                return $scope.theme.background;
              }
            }, {
              name: 'Header Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.gridSize * 3;
              },
              width: function() {
                return $scope.size.width;
              },
              y: 0,
              fill: function() {
                return $scope.theme.highlightColor;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.logoAltSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 3);
              },
              y: function() {
                var h = ($scope.size.gridSize);
                return $scope.size.height - (this.height() + h);
              },
              // x: 500,
              // y: 150,
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Bookmark',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.size.gridSize;
              },
              height: function() {
                return $scope.size.gridSize*2;
              },
              src: function() {
                return $scope.theme.bookmark;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - (this.width() + $scope.size.gridSize);
              },
              y: function() {
                return (($scope.size.gridSize*3.5) - this.height())/2;
              },
              // x: 500,
              // y: 150,
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Header Text',
              type: 'text',
              text: 'Forex Scandal',
              textTransform: 'uppercase',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.gridSize*2;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (18px)': 18,
                  'Large (22px)': 22,
                },
                fill: 'picker',
                textAnchor: true
              },
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Name here in caps',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 18,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: function() {
                return $scope.size.gridSize;
              },
              y: 235,
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Large (18px)': 18,
                }
              },
            }, {
              name: 'Read more',
              type: 'text',
              text: 'Read more about the case on ft.com/xxxxx',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.highlightColor;
              },
              fontSize: 18,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: function() {
                return $scope.size.gridSize;
              },
              y: 285,
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Large (18px)': 18,
                }
              },
            }, {
              name: 'Quote',
              type: 'text',
              text: '‘This would be a breaking news\nquote which looks like this and\ngoes here with black FT square’',
              fill: function() {
                return $scope.theme.quote;
              },
              controlsOrder: 1,
              fontSize: 44,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.gridSize*6;
              },
              fontWeight: 600,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (32px)': 32,
                  'Medium (44px)': 44,
                  'Large (50px)': 50,
                },
              },
            }];
          }
        }
        ]);
      }
    };
  });