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
                return $scope.theme.images.logoSrc;
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
                  'Small (18px)': 18,
                  'Standard (22px)': 22,
                  'Large (24px)': 24,
                }
              },
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Credit: Insert name here',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 22,
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
                  'Large (22px)': 22,
                }
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
                fontSize: {
                  'Small (26px)': 26,
                  'Standard (32px)': 32,
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
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 3);
              },
              y: function() {
                var h = ($scope.size.gridSize) / 2;
                return $scope.size.height - (this.height() + h);
              },
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
                  'Small (18px)': 18,
                  'Standard (22px)': 22,
                  'Large (24px)': 24,
                }
              },
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Ogden Nash',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 22,
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
                  'Large (22px)': 22,
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
                fontSize: {
                  'Small (50px)': 50,
                  'Standard (60px)': 60,
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
              controlsOrder: 2,
              height: function() {
                return +this.width;
              },
              src: function() {
                return $scope.theme.images.headshotSrc || '';
              },
              opacity: 1,
              x: function() {
                var w = (+this.width);
                return $scope.size.width - (w + $scope.size.gridSize);
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
                filters: [
                  'Grayscale'
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
                return $scope.theme.images.logoSrc;
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
              controlsOrder: 4,
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
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 22,
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
                  'Large (22px)': 22,
                }
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
                fontSize: {
                  'Small (26px)': 26,
                  'Standard (32px)': 32,
                  'Large (40px)': 40,
                  'X-Large (50px)': 50,
                },
              },
            }];
          }
        },{
          name: 'FT Weekend -- Quote With Headshot',
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
              controlsOrder: 2,
              height: function() {
                return +this.width;
              },
              src: function() {
                return $scope.theme.images.headshotSrc || '';
              },
              opacity: 1,
              x: function() {
                var w = (+this.width);
                return $scope.size.width - (w + $scope.size.gridSize);
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
                filters: [
                  'Grayscale'
                ],
              }
            }, {
              name: 'Cross Reference Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.gridSize * 3 + 5;
              },
              width: function() {
                return $scope.size.width + 10;
              },
              x: -5,
              y: function() {
                return $scope.size.height - this.height() + 5;
              },
              fill: function() {
                return $scope.theme.background;
              },
              stroke: function() {
                return $scope.theme.quote;
              }
            }, {
              name: 'Logo',
              type: 'text',
              text: function() {
                return $scope.theme.xrefText || 'FT Weekend';
              },
              controlsOrder: 4,
              fill: function() {
                return $scope.theme.xrefBackground;
              },
              fontSize: 28,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize);
              },
              fontWeight: 600,
              draggable: false
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Janan Ganesh on why\nLabour is Terrible',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 22,
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
                  'Large (22px)': 22,
                }
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
                fontSize: {
                  'Small (26px)': 26,
                  'Standard (32px)': 32,
                  'Large (40px)': 40,
                  'X-Large (50px)': 50,
                },
              },
            }];
          }
        },{
          name: 'FT Weekend -- Magazine Sidebar',
          elements: function($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 10,
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
              width: function() {
                return $scope.size.width * 0.6;
              },
              controlsOrder: 1,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }
                return h;
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
                filters: [
                  'Grayscale'
                ],
              }
            }, {
              name: 'Side Explanation Background',
              type: 'rect',
              controlsOrder: 10,
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
              fill: 'rgb(30,75,115)'
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 10,
              width: function() {
                return $scope.size.width * 0.3 - ($scope.size.gridSize * 2);
              },
              height: function() {
                return $scope.size.gridSize * 4;
              },
              src: function() {
                return $scope.theme.images.weekendSrc || $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 11);
              },
              y: function() {
                return $scope.size.gridSize;
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Reference Text',
              type: 'text',
              text: 'READ MORE AT\nFT.COM/XXX',
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
                return $scope.size.height - ($scope.size.gridSize*2 + 2);
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true
              }
            }, {
              name: 'Explanatory Text',
              type: 'text',
              text: 'It would be great\nto get this option\nfor the magazine\njust because it’s\ncloser to the way\nthey do things',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 24,
              fontFamily: 'financierdisplayweb',
              textAnchor: 'start',
              width: function () {
                return $scope.size.gridSize * 12;
              },
              x: function() {
                var w = $scope.size.width;
                return (w - $scope.size.gridSize * 11);
              },
              y: function() {
                return $scope.size.gridSize*7;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (22px)': 22,
                  'Standard (24px)': 24,
                  'Large (34px)': 34,
                }
              },
            }];
          }
        },{
          name: 'FT Weekend -- Recipe Card',
          elements: function($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 10,
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
              name: 'Recipe Image',
              type: 'image',
              width: function() {
                return $scope.size.width * 0.6;
              },
              controlsOrder: 1,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }
                return h;
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
                filters: [
                  'Grayscale'
                ],
              }
            }, {
              name: 'Side Explanation Background',
              type: 'rect',
              controlsOrder: 10,
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
              fill: 'rgb(67,20,95)'
            }, {
              name: 'Logo',
              type: 'text',
              text: 'FT Weekend',
              fill: 'white',
              fontSize: 28,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 11);
              },
              y: function() {
                return ($scope.size.gridSize * 2);
              },
              fontWeight: 600,
              draggable: false
            }, {
              name: 'Reference Text',
              type: 'text',
              text: 'READ THE RECIPE AT\nFT.COM/XXX',
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
                return $scope.size.height - ($scope.size.gridSize*2 + 2);
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true
              }
            }, {
              name: 'Recipe Name',
              type: 'text',
              text: 'Steak and\nkidney pudding',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 24,
              fontFamily: 'metricweb',
              textAnchor: 'start',
              width: function () {
                return $scope.size.gridSize * 12;
              },
              x: function() {
                var w = $scope.size.width;
                return (w - $scope.size.gridSize * 11);
              },
              y: function() {
                return $scope.size.gridSize*6.8;
              },
              fontWeight: 400,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (22px)': 22,
                  'Standard (24px)': 24,
                  'Large (34px)': 34,
                }
              },
            }, {
              name: 'Author Name',
              type: 'text',
              text: 'Rowley Leigh',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 24,
              fontFamily: 'financierdisplayweb',
              fontStyle: 'italic',
              textAnchor: 'start',
              width: function () {
                return $scope.size.gridSize * 12;
              },
              x: function() {
                var w = $scope.size.width;
                return (w - $scope.size.gridSize * 11);
              },
              y: function() {
                return $scope.size.gridSize*5.25;
              },
              fontWeight: 300,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (22px)': 22,
                  'Standard (24px)': 24,
                  'Large (34px)': 34,
                }
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
                return $scope.theme.images.logoSrc;
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
                  'Small (18px)': 18,
                  'Standard (22px)': 22,
                  'Large (24px)': 24,
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
                }
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
                text: true
              },
            }];
          }
        }, {
          name: 'Illustration',
          elements: function($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 10,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width;
              },
              fill: '#ffffff'
            }, {
              name: 'Illustration',
              type: 'image',
              width: function() {
                return $scope.size.width * 0.7 ;
              },
              controlsOrder: 1,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }

                return h;
              },
              src: function() {
                return $scope.theme.images.illustrationSrc;
              },
              opacity: 1,
              x: 0,
              y: function() {
                return $scope.size.gridSize*2;
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: true,
              defaultFilter: '',
              editable: {
                src: true,
                width: true,
                filters: [
                  'Grayscale'
                ],
              }
            }, {
              name: 'Side Explanation Background',
              type: 'rect',
              controlsOrder: 10,
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
              controlsOrder: 10,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.images.logoSrc;
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
                return $scope.size.height - ($scope.size.gridSize*2 + 2);
              },
              fontWeight: 500,
              draggable: false,
              editable: {
                text: true
              }
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
                  'Small (22px)': 22,
                  'Standard (24px)': 24,
                  'Large (34px)': 34,
                }
              },
            }];
          }
        }, {
          name: 'Chart: 1 Column',
          elements: function($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 10,
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
              name: 'Graph',
              type: 'image',
              width: function() {
                return $scope.size.width * 0.6;
              },
              controlsOrder: 1,
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
                return $scope.theme.images.graphSrc;
              },
              opacity: 1,
              x: function() {

                var areaW = $scope.size.width * 0.7;
                var picW = $scope.size.width * 0.45;
                var x = areaW/2 - picW/2;

                return x;
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
                filters: [
                  'Grayscale'
                ],
              }
            }, {
              name: 'Side Explanation Background',
              type: 'rect',
              controlsOrder: 10,
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
              controlsOrder: 10,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.images.logoSrc;
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
              name: 'Reference Text',
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
                return $scope.size.height - ($scope.size.gridSize*2 + 2);
              },
              fontWeight: 500,
              draggable: false,
              editable: {
                text: true
              }
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
                  'Small (22px)': 22,
                  'Standard (24px)': 24,
                  'Large (34px)': 34,
                }
              },
            }];
          }
        }, {
          name: 'Chart: 2 Column',
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
              name: 'Graph',
              type: 'image',
              width: function() {
                return $scope.size.width * 0.7;
              },
              controlsOrder: 1,
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
                return $scope.theme.images.graphWideSrc;
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
                filters: [
                  'Grayscale'
                ],
              }
            }, {
              name: 'Side Explanation Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width * 0.25;
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
                return $scope.theme.images.logoSrc;
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
              name: 'Reference Text',
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
                return (w - w*0.25) + $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize*2 + 2);
              },
              fontWeight: 500,
              draggable: false,
              editable: {
                text: true
              }
            }, {
              name: 'Explanatory Text',
              type: 'text',
              text: 'This is\nexplanation text\nwhich goes with\nthe chart. Should\nrun short if\npossible. Slightly\nnarrower than\nstandard RH box',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 18,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              width: function () {
                return $scope.size.width * 0.25;
              },
              x: function() {
                var w = $scope.size.width;
                return (w - w*0.25) + $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.gridSize*2;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Standard (18px)': 18,
                  'Large (22px)': 22,
                }
              },
            }];
          }
        }, {
          name: 'Promo A',
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
              name: 'Promo Image',
              type: 'image',
              width: function() {
                return $scope.size.width;
              },
              controlsOrder: 1,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }
                return h;
              },
              src: function() {
                return $scope.theme.images.promoSrc;
              },
              opacity: 1,
              x: '0%',
              y: '0%',
              preserveAspectRatio: 'xMinYMin meet',
              draggable: true,
              defaultFilter: '',
              editable: {
                src: true,
                width: true,
                filters: [
                  'Grayscale'
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
                return $scope.theme.images.logoSrc;
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
              text: 'Promo A please go to ft.com/something-interesting',
              controlsOrder: 2,
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
                  'Small (18px)': 18,
                  'Standard (22px)': 22,
                  'Large (24px)': 24,
                }
              },
            }];
          }
        }, {
          name: 'Promo B',
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
              name: 'Promo Image',
              type: 'image',
              width: function() {
                return $scope.size.width * 0.75;
              },
              controlsOrder: 1,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }
                return h;
              },
              src: function() {
                return $scope.theme.images.promoSrc;
              },
              opacity: 1,
              x: '0%',
              y: '0%',
              preserveAspectRatio: 'xMinYMin meet',
              draggable: true,
              defaultFilter: '',
              editable: {
                src: true,
                width: true,
                filters: [
                  'Grayscale'
                ],
              }
            }, {
              name: 'Side Explanation Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width * 0.25;
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
                return $scope.theme.images.logoSrc;
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
              name: 'Explanatory Text',
              type: 'text',
              text: 'Promo B\nplease go\nto ft.com/\nsomething-\ninteresting',
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
                return $scope.size.width * 0.25;
              },
              x: function() {
                var w = $scope.size.width;
                return (w - w*0.25) + $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.gridSize*2;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (22px)': 22,
                  'Standard (24px)': 24,
                  'Large (28px)': 28,
                }
              },
            }];
          }
        }, {
          name: 'Breaking News',
          elements: function($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 17,
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
              controlsOrder: 15,
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
              controlsOrder: 16,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.images.logoAltSrc;
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
              name: 'Bookmark',
              type: 'image',
              controlsOrder: 16,
              width: function() {
                return $scope.size.gridSize;
              },
              height: function() {
                return $scope.size.gridSize*2;
              },
              src: function() {
                return $scope.theme.images.bookmark;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - (this.width() + $scope.size.gridSize);
              },
              y: function() {
                return (($scope.size.gridSize*3.5) - this.height())/2;
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Header Text',
              type: 'text',
              text: 'Forex Scandal',
              textTransform: 'uppercase',
              controlsOrder: 1,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 24,
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
                  'Small (22px)': 22,
                  'Standard (24px)': 24,
                  'Large (28px)': 28,
                },
              },
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Name here in caps',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 22,
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
                  'Large (18px)': 22,
                }
              },
            }, {
              name: 'Read more',
              type: 'text',
              text: 'Read more about the case on ft.com/xxxxx',
              controlsOrder: 4,
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
                  'Standard (18px)': 18,
                  'Large (18px)': 22,
                }
              },
            }, {
              name: 'Quote',
              type: 'text',
              text: '‘This would be a breaking news\nquote which looks like this and\ngoes here with black FT square’',
              fill: function() {
                return $scope.theme.quote;
              },
              controlsOrder: 2,
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
                  'Standard (44px)': 44,
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
