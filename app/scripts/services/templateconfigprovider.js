'use strict';

function getOverride (theme, property, $scope) {
  var hasOverrideTheme = $scope.theme.overrideConfigs.hasOwnProperty(theme);
  if (hasOverrideTheme) {
    return $scope.theme.overrideConfigs[theme].hasOwnProperty(property) !== null ? $scope.theme.overrideConfigs[theme][property] : null
  } else {
    return null
  }
}

var templateHelper = {
  logo: {
    width: function ($scope) {
      var hasOverrideWidth = getOverride('templateHelperLogo', 'logoWidth', $scope)
      var width = hasOverrideWidth ? hasOverrideWidth : 2
      return $scope.size.gridSize * width;
    },
    height: function ($scope) {
      var hasOverrideHeight = getOverride('templateHelperLogo', 'logoHeight', $scope)
      var height = hasOverrideHeight ? hasOverrideHeight : 2
      return $scope.size.gridSize * height;
    },
    x: function ($scope) {
      var hasOverrideWidth = getOverride('templateHelperLogo', 'logoWidth', $scope)
      return $scope.size.width - (hasOverrideWidth ? this.width($scope) : $scope.size.gridSize * 3);
    },
    y: function ($scope) {
      var hasOverrideHeight = getOverride('templateHelperLogo', 'logoHeight', $scope)
      var paddingTop = hasOverrideHeight ? 0 : $scope.size.gridSize / 2;
      return $scope.size.height - (this.height($scope) + paddingTop);
    }
  },
  creditFontSize: function ($scope) {
    if ($scope.size.name === 'Twitter') {
      return $scope.theme.isNikkei ? 20 : 22;
    } else {
      return $scope.theme.isNikkei ? 16 : 18;
    }
  },
  headLineFontSize: function ($scope) {
    if ($scope.size.name === 'Twitter') {
      return $scope.theme.isNikkei ? 30 : 32;
    } else {
      return $scope.theme.isNikkei ? 22 : 24;
    }
  },
  crossReferenceBackground: {
    width: function ($scope) {
      var hasOverrideWidth = getOverride('templateHelperLogo', 'logoWidth', $scope)
      var width = hasOverrideWidth ? hasOverrideWidth : 2
      var logoOverrideDeduct = hasOverrideWidth ? $scope.size.gridSize * width : 0;
      return $scope.size.width - logoOverrideDeduct;
    }
  }
}
/**
 * @ngdoc provider
 * @name cardkitApp.templateConfigProvider
 * @description
 * # templateConfigProvider
 * Loads the available templates
 */
angular.module('cardkitApp')
  .provider('templateConfigProvider', function () {
    return {
      $get: function () {
        return ([{
          name: 'Quote',
          elements: function ($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 7,
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width;
              },
              fill: function () {
                return $scope.theme.background;
              }
            }, {
              name: 'Cross Reference Background',
              type: 'rect',
              controlsOrder: 5,
              height: function () {
                return $scope.size.gridSize * 3;
              },
              width: function () {
                return templateHelper.crossReferenceBackground.width($scope);
              },
              y: function () {
                return $scope.size.height - this.height();
              },
              fill: function () {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function () {
                return templateHelper.logo.width($scope);
              },
              height: function () {
                return templateHelper.logo.height($scope);
              },
              src: function () {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function () {
                return templateHelper.logo.x($scope);
              },
              y: function () {
                return templateHelper.logo.y($scope);
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
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return templateHelper.creditFontSize($scope)
              },
              fontFamily: function () {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
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
              fill: function () {
                return $scope.theme.quote;
              },
              fontSize: function () {
                return templateHelper.creditFontSize($scope)
              },
              fontFamily: function () {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.height - $scope.size.gridSize * 5;
              },
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
              text: 'Add text or a quote here.\n' +
              'You can drag it around.\n\n' +
              'More text can go here',
              fill: function () {
                return $scope.theme.quote;
              },
              controlsOrder: 1,
              fontSize: function () {
                return templateHelper.headLineFontSize($scope)
              },
              fontFamily: function () {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.gridSize * 3;
              },
              fontWeight: 600,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (24px)': 24,
                  'Standard (32px)': 32,
                  'Large (40px)': 40,
                  'X-Large (50px)': 50,
                },
              },
            }];
          }
        }, {
          name: 'Quote Big',
          elements: function ($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 7,
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width;
              },
              fill: function () {
                return $scope.theme.background;
              }
            }, {
              name: 'Cross Reference Background',
              type: 'rect',
              controlsOrder: 5,
              height: function () {
                return $scope.size.gridSize * 3;
              },
              width: function () {
                return templateHelper.crossReferenceBackground.width($scope);
              },
              y: function () {
                return $scope.size.height - this.height();
              },
              fill: function () {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function () {
                return templateHelper.logo.width($scope);
              },
              height: function () {
                return templateHelper.logo.height($scope);
              },
              src: function () {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function () {
                return templateHelper.logo.x($scope);
              },
              y: function () {
                return templateHelper.logo.y($scope);
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Cross Reference Text',
              type: 'text',
              text: 'Read more at: Insert name here',
              controlsOrder: 3,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 22 : 18;
              },
              fontFamily: function () {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
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
              fill: function () {
                return $scope.theme.quote;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 22 : 16;
              },
              fontFamily: function () {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.height - $scope.size.gridSize * 5;
              },
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

              text: 'Big quote here\n' +
              'Can move',
              fill: function () {
                return $scope.theme.quote;
              },
              controlsOrder: 1,
              fontSize: function () {
                return ($scope.size.name === 'Twitter' ) ? 60 : 50;
              },
              fontFamily: function () {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.gridSize * 4;
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
        }, {
          name: 'Quote With Headshot',
          elements: function ($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 7,
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width;
              },
              fill: function () {
                return $scope.theme.background;
              }
            }, {
              name: 'Image',
              type: 'image',
              width: function () {
                return $scope.size.gridSize * 20;
              },
              controlsOrder: 2,
              height: function () {
                if (typeof this.width === 'function') {
                  return this.width();
                }
                return this.width;
              },
              src: function () {
                return $scope.theme.images.headshotSrc || '';
              },
              opacity: 1,
              x: function () {
                return $scope.size.gridSize * 20;
              },
              y: function () {
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
              height: function () {
                return $scope.size.gridSize * 3;
              },
              width: function () {
                return templateHelper.crossReferenceBackground.width($scope);
              },
              y: function () {
                return $scope.size.height - this.height();
              },
              fill: function () {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function () {
                return templateHelper.logo.width($scope);
              },
              height: function () {
                return templateHelper.logo.height($scope);
              },
              src: function () {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function () {
                return templateHelper.logo.x($scope);
              },
              y: function () {
                return templateHelper.logo.y($scope);
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Cross Reference Text',
              type: 'text',
              text: 'Read more at: Insert name here',
              controlsOrder: 4,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 22 : 18;
              },
              fontFamily: function () {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
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
              text: 'Shakespeare\nMuch Ado About Nothing',
              controlsOrder: 3,
              fill: function () {
                return $scope.theme.quote;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 22 : 16;
              },
              fontFamily: function () {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.height - $scope.size.gridSize * 6;
              },
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
              fill: function () {
                return $scope.theme.quote;
              },
              controlsOrder: 1,
              fontSize: function () {
                if ($scope.theme.isNikkei) {
                  return ($scope.size.name === 'Twitter') ? 28 : 24;
                }
                return ($scope.size.name === 'Twitter') ? 32 : 26;
              },
              fontFamily: function () {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.gridSize * 3;
              },
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
                fontStyle: {
                  'standard': 'normal',
                  'italic': 'italic',
                },
              },
            }];
          }
        }, {
          name: 'Big Number',
          elements: function ($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 7,
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width;
              },
              fill: function () {
                return $scope.theme.background;
              }
            }, {
              name: 'Cross Reference Background',
              type: 'rect',
              controlsOrder: 5,
              height: function () {
                return $scope.size.gridSize * 3;
              },
              width: function () {
                return templateHelper.crossReferenceBackground.width($scope);
              },
              y: function () {
                return $scope.size.height - this.height();
              },
              fill: function () {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function () {
                return templateHelper.logo.width($scope);
              },
              height: function () {
                return templateHelper.logo.height($scope);
              },
              src: function () {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function () {
                return templateHelper.logo.x($scope);
              },
              y: function () {
                return templateHelper.logo.y($scope);
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Cross Reference Text',
              type: 'text',
              text: 'Read more at: Insert name here',
              controlsOrder: 3,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 22 : 18;
              },
              fontFamily: function () {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
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
              text: 'Add text here - you can also drag it\naround. It can be one line or several.',
              controlsOrder: 2,
              fill: function () {
                return $scope.theme.quote;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 32 : 26;
              },
              fontFamily: function () {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.gridSize * 13;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (26px)': 26,
                  'Medium (32px)': 32,
                  'Large (34px)': 34,
                }
              },
            }, {
              name: 'Big Number',
              type: 'text',
              text: 'Number',
              fill: function () {
                return $scope.theme.highlightColor;
              },
              controlsOrder: 1,
              fontSize: function () {
                return ($scope.size.name === 'Facebook') ? 80 : 100;
              },
              fontFamily: function () {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.gridSize * 7;
              },
              fontWeight: 600,
              draggable: true,
              editable: {
                text: true
              },
            }];
          }
        }, {
          name: 'Illustration',
          elements: function ($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 10,
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width;
              },
              fill: '#ffffff'
            }, {
              name: 'Illustration',
              type: 'image',
              width: function () {
                return $scope.size.width * 0.7;
              },
              controlsOrder: 1,
              height: function () {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }

                return h;
              },
              src: function () {
                return $scope.theme.images.illustrationSrc;
              },
              opacity: 1,
              x: 0,
              y: function () {
                return $scope.size.gridSize * 2;
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
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width * 0.3;
              },
              y: '0%',
              x: function () {
                return $scope.size.width - this.width();
              },
              fill: function () {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function () {
                var override = getOverride('illustration', 'logoWidth', $scope)
                var width = override ? override : 2
                return $scope.size.gridSize * width;
              },
              height: function () {
                return templateHelper.logo.height($scope);
              },
              src: function () {
                return $scope.theme.images.logoWideSrc ? $scope.theme.images.logoWideSrc : $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function () {
                var hasOverride = getOverride('illustration', 'logoWidth', $scope);
                return $scope.size.width - (hasOverride ? this.width($scope) : $scope.size.gridSize * 3);
              },
              y: function () {
                return $scope.size.height - $scope.size.gridSize * 3
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Ref Text',
              type: 'text',
              text: 'FT.COM/\nCOMPANIES',
              controlsOrder: 3,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                if ($scope.theme.isNikkei) return 0;
                return ($scope.size.name === 'Twitter') ? 18 : 14;
              },
              fontFamily: function () {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function () {
                var w = $scope.size.width;
                return (w - w * 0.3) + $scope.size.gridSize;
              },
              y: function () {
                var hasOverride = getOverride('illustration', 'refYPos', $scope);
                return $scope.size.height - ($scope.size.gridSize * (hasOverride ? hasOverride : 2) + 2);
              },
              fontWeight: 500,
              draggable: false,
              editable: {
                text: true
              }
            }, {
              name: 'Explanatory Text',
              type: 'text',
              text: 'Add text here.\n\nYou can also\ndrag it around.\n\nIt can be one\nline or several.',
              controlsOrder: 2,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 24 : 18;
              },
              fontFamily: function () {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              width: function () {
                return $scope.size.width * 0.3;
              },
              x: function () {
                var w = $scope.size.width;
                return (w - w * 0.3) + $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.gridSize * 2;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (18px)': 18,
                  'Standard (24px)': 24,
                  'Large (34px)': 34,
                }
              },
            }];
          }
        }, {
          name: 'Chart: 1 Column',
          elements: function ($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 10,
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width;
              },
              fill: function () {
                return $scope.theme.background;
              }
            }, {
              name: 'Graph',
              type: 'image',
              width: function () {
                return $scope.size.width * 0.6;
              },
              controlsOrder: 1,
              height: function () {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }

                if (h > ($scope.size.height - $scope.size.gridSize * 2)) {
                  h = $scope.size.height - $scope.size.gridSize * 2;
                }
                return h;
              },
              src: function () {
                return $scope.theme.images.graphSrc;
              },
              opacity: 1,
              x: function () {

                var areaW = $scope.size.width * 0.7;
                var picW = $scope.size.width * 0.45;
                var x = areaW / 2 - picW / 2;

                return x;
              },
              y: function () {
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
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width * 0.3;
              },
              y: '0%',
              x: function () {
                return $scope.size.width - this.width();
              },
              fill: function () {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function () {
                var override = getOverride('chart1', 'logoWidth', $scope);
                return $scope.size.gridSize * (override ? override : 2);
              },
              height: function () {
                return templateHelper.logo.height($scope);
              },
              src: function () {
                return $scope.theme.images.logoWideSrc ? $scope.theme.images.logoWideSrc : $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function () {
                var override = getOverride('chart1', 'logoWidth', $scope);
                return $scope.size.width - (override ? this.width($scope) : $scope.size.gridSize * 3);
              },
              y: function () {
                return $scope.size.height - $scope.size.gridSize * 3
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Reference Text',
              type: 'text',
              text: 'FT.COM/\nCOMPANIES',
              controlsOrder: 3,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                if ($scope.theme.isNikkei) return 0;
                return ($scope.size.name === 'Twitter') ? 18 : 14;
              },
              fontFamily: function () {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function () {
                var w = $scope.size.width;
                return (w - w * 0.3) + $scope.size.gridSize;
              },
              y: function () {
                var override = getOverride('chart1', 'refYPos', $scope);
                return $scope.size.height - ($scope.size.gridSize * (override ? override : 2) + 2);
              },
              fontWeight: 500,
              draggable: false,
              editable: {
                text: true
              }
            }, {
              name: 'Explanatory Text',
              type: 'text',
              text: 'Add text here.\n\nYou can drag\nit around.\n\nIt can be one\nline or several.',
              controlsOrder: 2,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 24 : 18;
              },
              fontFamily: function () {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              width: function () {
                return $scope.size.width * 0.3;
              },
              x: function () {
                var w = $scope.size.width;
                return (w - w * 0.3) + $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.gridSize * 2;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (18px)': 18,
                  'Medium (20px)': 20,
                  'Standard (24px)': 24,
                  'Large (34px)': 34,
                }
              },
            }];
          }
        }, {
          name: 'Chart: 2 Column',
          elements: function ($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 7,
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width;
              },
              fill: function () {
                return $scope.theme.background;
              }
            }, {
              name: 'Graph',
              type: 'image',
              width: function () {
                return $scope.size.width * 0.7;
              },
              controlsOrder: 1,
              height: function () {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }

                if (h > ($scope.size.height - $scope.size.gridSize * 2)) {
                  h = $scope.size.height - $scope.size.gridSize * 2;
                }
                return h;
              },
              src: function () {
                return $scope.theme.images.graphWideSrc;
              },
              opacity: 1,
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
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
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width * 0.25;
              },
              y: '0%',
              x: function () {
                return $scope.size.width - this.width();
              },
              fill: function () {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function () {
                var override = getOverride('chart2', 'logoWidth', $scope)
                return $scope.size.gridSize * (override ? override : 2);
              },
              height: function () {
                var override = getOverride('chart2', 'logoHeight', $scope)
                return $scope.size.gridSize * (override ? override : 2);
              },
              src: function () {
                return $scope.theme.images.logoWideSrc ? $scope.theme.images.logoWideSrc : $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function () {
                var override = getOverride('chart2', 'logoWidth', $scope)
                return $scope.size.width - (override ? this.width($scope) : $scope.size.gridSize * 3);
              },
              y: function () {
                var override = getOverride('chart2', 'logoWidth', $scope)
                var paddingTop = override ? 0 : $scope.size.gridSize;
                return $scope.size.height - (this.height($scope) + paddingTop);
              },
              preserveAspectRatio: 'xMidYMid slice',
              draggable: false
            }, {
              name: 'Reference Text',
              type: 'text',
              text: 'FT.COM/\nCOMPANIES',
              controlsOrder: 3,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                if ($scope.theme.isNikkei) return 0;
                return ($scope.size.name === 'Twitter') ? 18 : 14;
              },
              fontFamily: function () {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function () {
                var w = $scope.size.width;
                return (w - w * 0.25) + $scope.size.gridSize;
              },
              y: function () {
                var override = getOverride('chart2', 'refYPos', $scope)
                return $scope.size.height - ($scope.size.gridSize * (override ? override : 2) + 2);
              },
              fontWeight: 500,
              draggable: false,
              editable: {
                text: true
              }
            }, {
              name: 'Explanatory Text',
              type: 'text',
              text: 'Add text here.\n\nYou can drag\nit around.\n\nIt can be one\nline or several.',
              controlsOrder: 2,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return ($scope.size.name === 'Facebook') ? 14 : 18;
              },
              fontFamily: function () {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              width: function () {
                return $scope.size.width * 0.25;
              },
              x: function () {
                var w = $scope.size.width;
                return (w - w * 0.25) + $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.gridSize * 2;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (14px)': 14,
                  'Standard (18px)': 18,
                  'Large (22px)': 22,
                }
              },
            }];
          }
        }, {
          name: 'Promo A',
          elements: function ($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 7,
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width;
              },
              fill: function () {
                return $scope.theme.background;
              }
            }, {
              name: 'Promo Image',
              type: 'image',
              width: function () {
                return $scope.size.width;
              },
              controlsOrder: 1,
              height: function () {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }
                return h;
              },
              src: function () {
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
              height: function () {
                return $scope.size.gridSize * 3;
              },
              width: function () {
                return templateHelper.crossReferenceBackground.width($scope);
              },
              y: function () {
                return $scope.size.height - this.height();
              },
              fill: function () {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function () {
                return templateHelper.logo.width($scope);
              },
              height: function () {
                return templateHelper.logo.height($scope);
              },
              src: function () {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function () {
                return templateHelper.logo.x($scope);
              },
              y: function () {
                return templateHelper.logo.y($scope);
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Cross Reference Text',
              type: 'text',
              text: 'Promo A please go to xyz.com/something',
              controlsOrder: 2,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 22 : 18;
              },
              fontFamily: function () {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
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
          elements: function ($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 7,
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width;
              },
              fill: function () {
                return $scope.theme.background;
              }
            }, {
              name: 'Promo Image',
              type: 'image',
              width: function () {
                return $scope.size.width * 0.75;
              },
              controlsOrder: 1,
              height: function () {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }
                return h;
              },
              src: function () {
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
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width * 0.25;
              },
              y: '0%',
              x: function () {
                return $scope.size.width - this.width();
              },
              fill: function () {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function () {
                var override = getOverride('promoB', 'logoWidth', $scope)
                return $scope.size.gridSize * (override ? override : 2);
              },
              height: function () {
                var override = getOverride('promoB', 'logoHeight', $scope)
                return $scope.size.gridSize * (override ? override : 2);
              },
              src: function () {
                return $scope.theme.images.logoWideSrc ? $scope.theme.images.logoWideSrc : $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function () {
                var override = getOverride('promoB', 'logoWidth', $scope)
                return $scope.size.width - (override ? this.width($scope) : $scope.size.gridSize * 3);
              },
              y: function () {
                var override = getOverride('promoB', 'logoHeight', $scope)
                var paddingTop = override ? 0 : $scope.size.gridSize;
                return $scope.size.height - (this.height($scope) + paddingTop);
              },
              preserveAspectRatio: 'xMidYMid slice',
              draggable: false
            }, {
              name: 'Explanatory Text',
              type: 'text',
              text: 'Promo B\nplease go\nto xyz.com/\nsomething-\ninteresting',
              controlsOrder: 2,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 24 : 18;
              },
              fontFamily: function () {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              width: function () {
                return $scope.size.width * 0.25;
              },
              x: function () {
                var w = $scope.size.width;
                return (w - w * 0.25) + $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.gridSize * 2;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (18px)': 18,
                  'Standard (24px)': 24,
                  'Large (28px)': 28,
                }
              },
            }];
          }
        }, {
          name: 'Breaking News',
          elements: function ($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 17,
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width;
              },
              fill: function () {
                return $scope.theme.background;
              }
            }, {
              name: 'Header Background',
              type: 'rect',
              controlsOrder: 15,
              height: function () {
                return $scope.size.gridSize * 3;
              },
              width: function () {
                return $scope.size.width;
              },
              y: 0,
              fill: function () {
                return $scope.theme.highlightColor;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 16,
              width: function () {
                return templateHelper.logo.width($scope);
              },
              height: function () {
                return templateHelper.logo.height($scope);
              },
              src: function () {
                return $scope.theme.images.logoAltSrc;
              },
              opacity: 1,
              x: function () {
                return templateHelper.logo.x($scope);
              },
              y: function () {
                var override = getOverride('breakingNews', 'logoYPos', $scope)
                var paddingTop = override === 0 ? 0 : $scope.size.gridSize;
                return $scope.size.height - (this.height($scope) + paddingTop);
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Bookmark',
              type: 'image',
              controlsOrder: 16,
              width: function () {
                return $scope.size.gridSize;
              },
              height: function () {
                return $scope.size.gridSize * 2;
              },
              src: function () {
                return $scope.theme.images.bookmark;
              },
              opacity: 1,
              x: function () {
                return $scope.size.width - (this.width() + $scope.size.gridSize);
              },
              y: function () {
                return (($scope.size.gridSize * 3.5) - this.height()) / 2;
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Header Text',
              type: 'text',
              text: 'Forex Scandal',
              textTransform: 'uppercase',
              controlsOrder: 1,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 24 : 18;
              },
              fontFamily: function () {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.gridSize * 2;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (18px)': 18,
                  'Standard (24px)': 24,
                  'Large (28px)': 28,
                },
              },
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Name here in caps',
              controlsOrder: 3,
              fill: function () {
                return $scope.theme.quote;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 22 : 18;
              },
              fontFamily: function () {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.height - $scope.size.gridSize * 5;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (18px)': 18,
                  'Large (22px)': 22,
                }
              },
            }, {
              name: 'Read more',
              type: 'text',
              text: 'Read more about the case on ft.com/xxxxx',
              controlsOrder: 4,
              fill: function () {
                return $scope.theme.highlightColor;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 18 : 14;
              },
              fontFamily: function () {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.height - $scope.size.gridSize;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (14px)': 14,
                  'Standard (18px)': 18,
                  'Large (22px)': 22,
                }
              },
            }, {
              name: 'Quote',
              type: 'text',
              text: '‘Breaking news’',
              fill: function () {
                return $scope.theme.quote;
              },
              controlsOrder: 2,
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 44 : 34;
              },
              fontFamily: function () {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.gridSize * 6;
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
        }, {
          name: 'FT Weekend -- Quote With Headshot',
          elements: function ($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 7,
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width;
              },
              fill: function () {
                return $scope.theme.background;
              }
            }, {
              name: 'Image',
              type: 'image',
              width: function () {
                return $scope.size.gridSize * 20;
              },
              controlsOrder: 2,
              height: function () {
                if (typeof this.width === 'function') {
                  return this.width();
                }
                return this.width;
              },
              src: function () {
                return $scope.theme.images.headshotSrc || '';
              },
              opacity: 1,
              x: function () {
                var w;
                if (typeof this.width === 'function') {
                  w = this.width();
                } else {
                  w = +this.width;
                }
                return $scope.size.width - (w + $scope.size.gridSize);
              },
              y: function () {
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
              height: function () {
                return $scope.size.gridSize * 3 + 5;
              },
              width: function () {
                return $scope.size.width + 10;
              },
              x: -5,
              y: function () {
                return $scope.size.height - this.height() + 5;
              },
              fill: function () {
                return $scope.theme.background;
              },
              stroke: function () {
                return $scope.theme.quote;
              }
            }, {
              name: 'Logo',
              type: 'text',
              text: function () {
                return $scope.theme.xrefText || 'FT Weekend';
              },
              controlsOrder: 4,
              fill: function () {
                return $scope.theme.xrefBackground;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 28 : 24;
              },
              fontFamily: function () {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.height - ($scope.size.gridSize);
              },
              fontWeight: 600,
              draggable: false
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Janan Ganesh on why\nLabour is Terrible',
              controlsOrder: 3,
              fill: function () {
                return $scope.theme.quote;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 22 : 16;
              },
              fontFamily: function () {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.height - $scope.size.gridSize * 6;
              },
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
              fill: function () {
                return $scope.theme.quote;
              },
              controlsOrder: 1,
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 32 : 26;
              },
              fontFamily: function () {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.gridSize * 3;
              },
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
          name: 'FT Weekend -- Magazine Sidebar',
          elements: function ($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 10,
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width;
              },
              fill: function () {
                return $scope.theme.background;
              }
            }, {
              name: 'Image',
              type: 'image',
              width: function () {
                return $scope.size.width * 0.6;
              },
              controlsOrder: 1,
              height: function () {
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
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width * 0.3;
              },
              y: '0%',
              x: function () {
                return $scope.size.width - this.width();
              },
              fill: 'rgb(30,75,115)'
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 10,
              width: function () {
                return $scope.size.width * 0.3 - ($scope.size.gridSize * 2);
              },
              height: function () {
                return $scope.size.gridSize * 4;
              },
              src: function () {
                return $scope.theme.images.weekendSrc || $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function () {
                return $scope.size.width - ($scope.size.gridSize * 11);
              },
              y: function () {
                return $scope.size.gridSize;
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Reference Text',
              type: 'text',
              text: 'READ MORE AT\nXYZ.COM/ABC',
              controlsOrder: 3,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 18 : 14;
              },
              fontFamily: function () {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function () {
                var w = $scope.size.width;
                return (w - w * 0.3) + $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.height - ($scope.size.gridSize * 2 + 2);
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true
              }
            }, {
              name: 'Explanatory Text',
              type: 'text',
              text: 'Add text here -\nYou can also drag\nit around.\n\nIt can be over one\nline or several.',
              controlsOrder: 2,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 24 : 18;
              },
              fontFamily: 'financierdisplayweb',
              textAnchor: 'start',
              width: function () {
                return $scope.size.gridSize * 12;
              },
              x: function () {
                var w = $scope.size.width;
                return (w - $scope.size.gridSize * 11);
              },
              y: function () {
                return $scope.size.gridSize * 7;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (18px)': 18,
                  'Standard (24px)': 24,
                  'Large (34px)': 34,
                }
              },
            }];
          }
        }, {
          name: 'FT Weekend -- Recipe Card',
          elements: function ($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              controlsOrder: 10,
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width;
              },
              fill: function () {
                return $scope.theme.background;
              }
            }, {
              name: 'Recipe Image',
              type: 'image',
              width: function () {
                return $scope.size.width * 0.6;
              },
              controlsOrder: 1,
              height: function () {
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
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width * 0.3;
              },
              y: '0%',
              x: function () {
                return $scope.size.width - this.width();
              },
              fill: 'rgb(67,20,95)'
            }, {
              name: 'Logo',
              type: 'text',
              text: 'FT Weekend',
              fill: 'white',
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 28 : 22;
              },
              fontFamily: function () {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.width - ($scope.size.gridSize * 11);
              },
              y: function () {
                return ($scope.size.gridSize * 2);
              },
              fontWeight: 600,
              draggable: false
            }, {
              name: 'Reference Text',
              type: 'text',
              text: 'READ THE RECIPE AT\nFT.COM/XXX',
              controlsOrder: 3,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 18 : 14;
              },
              fontFamily: function () {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function () {
                var w = $scope.size.width;
                return (w - w * 0.3) + $scope.size.gridSize;
              },
              y: function () {
                return $scope.size.height - ($scope.size.gridSize * 2 + 2);
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
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 24 : 18;
              },
              fontFamily: 'metricweb',
              textAnchor: 'start',
              width: function () {
                return $scope.size.gridSize * 12;
              },
              x: function () {
                var w = $scope.size.width;
                return (w - $scope.size.gridSize * 11);
              },
              y: function () {
                return $scope.size.gridSize * 6.8;
              },
              fontWeight: 400,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (18px)': 18,
                  'Standard (24px)': 24,
                  'Large (34px)': 34,
                }
              },
            }, {
              name: 'Author Name',
              type: 'text',
              text: 'Rowley Leigh',
              controlsOrder: 2,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                return ($scope.size.name === 'Twitter') ? 24 : 18;
              },
              fontFamily: 'financierdisplayweb',
              fontStyle: 'italic',
              textAnchor: 'start',
              width: function () {
                return $scope.size.gridSize * 12;
              },
              x: function () {
                var w = $scope.size.width;
                return (w - $scope.size.gridSize * 11);
              },
              y: function () {
                return $scope.size.gridSize * 5.25;
              },
              fontWeight: 300,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (18px)': 18,
                  'Standard (24px)': 24,
                  'Large (34px)': 34,
                }
              },
            }];
          }
        },
        {
          name: 'Video ',
          elements: function ($scope) {
            return [{
              name: 'Background Colour',
              type: 'rect',
              height: function () {
                return $scope.size.height;
              },
              width: function () {
                return $scope.size.width;
              },
              fill: function () {
                return $scope.theme.background;
              }
            }, {
              name: 'Background Image',
              type: 'image',
              width: function () {
                return $scope.size.width;
              },
              controlsOrder: 5,
              height: function () {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }

                return h;
              },
              src: function () {
                return $scope.theme.images.videoBackgroundImage;
              },
              opacity: 1,
              x: function () {
                return 0;
              },
              y: function () {
                return 0;
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: true,
              defaultFilter: '',
              enabled:true,
              editable: {
                src: true,
                width: true,
                filters: [
                  'Grayscale',
                  'FTPink'
                ],
              }
            }, {
              name: 'Text Background',
              type: 'rect',
              controlsOrder: 4,
              defaultDisplay: function() {
                return 'block'
              },
              height: function () {
                // Standard video preview size
                return $scope.size.name === "Video" ? 95 : $scope.size.gridSize * 3;
              },
              width: function () {
                return $scope.size.width;
              },
              y: function () {
                return $scope.size.height - this.height();
              },
              fill: function () {
                return $scope.theme.xrefBackground;
              },
              editable: {
                display: {
                 'Hide': 'none',
                 'Show': 'block'
                }
              }
            }, {
              name: 'FT Logo',
              type: 'image',
              controlsOrder: 2,
              defaultDisplay: function() {
                return 'block'
              },
              width: function () {
                return $scope.size.name === "Video" ? $scope.size.gridSize * 5.8 : $scope.size.gridSize * 3;
              },
              height: function () {
                return $scope.size.name === "Video" ? $scope.size.gridSize * 5.8 : $scope.size.gridSize * 3;
              },
              src: function () {
                return $scope.theme.images.logoSrc;
              },
              opacity: 0.85,
              x: function () {
                return $scope.size.name === "Video" ? $scope.size.gridSize * 1.8 : $scope.size.gridSize * 1.5;
              },
              y: function () {
                return $scope.size.name === "Video" ? $scope.size.gridSize * 1.8 : $scope.size.gridSize * 1.5;
              },
              preserveAspectRatio: 'xMaxYMax meet',
              draggable: false,
              editable: {
                display: {
                 'Hide': 'none',
                 'Show': 'block'
                }
              }
            }, {
              name: 'Text',
              type: 'text',
              text: '',
              controlsOrder: 1,
              fill: function () {
                return $scope.theme.xref;
              },
              fontSize: function () {
                // Standard video preview font size
                switch($scope.size.name){
                  case 'Twitter':
                    return 22;
                  case 'Video':
                    return 76;
                  default :
                    return 18;
                }
              },
              lineHeight : function () {
                return 30
              },
              fontFamily: function () {
                return $scope.theme.font;
              },
              textAnchor: 'start',
              x: function () {
                return $scope.size.height * 0.055;
              },
              y: function () {
                return $scope.size.name === "Video" ? $scope.size.height - 29 : $scope.size.height - ($scope.size.gridSize);
              },
              fontWeight: 500,
              draggable: false,
              editable: {
                text: true
              },
              }, {
                name: 'Headshot',
                type: 'image',
                width: function () {
                  return $scope.size.name === "Video" ? $scope.size.gridSize * 28 : $scope.size.gridSize * 15;
                },
                controlsOrder: 6,
                height: function () {
                  if (typeof this.width === 'function') {
                    return this.width();
                  }
                  return this.width;
                },
                src: function () {
                  return $scope.theme.images.headshotSrc || '';
                },
                opacity: 1,
                x: function () {
                  return $scope.size.width - this.width();
                },
                y: function () {
                  return $scope.size.height - this.height() + 1
                },
                preserveAspectRatio: 'xMaxYMax meet',
                draggable: true,
                defaultFilter: '',
                editable: {
                  src: true,
                  filters: [
                    'Grayscale'
                  ]
                }
            },{
              name: 'Reuters Logo',
              type: 'image',
              defaultDisplay: function() {
                return 'none'
              },
              width: function () {
                return $scope.size.name === "Video" ? $scope.size.gridSize * 18 : $scope.size.gridSize * 10;
              },
              controlsOrder: 3,
              height: function () {
                if (typeof this.width === 'function') {
                  return this.width();
                }
                return this.width;
              },
              src: function () {
                return $scope.theme.images.reutersLogo || '';
              },
              opacity: 1,
              x: function () {
                return $scope.size.height * 0.055;
              },
              y: function () {
                return $scope.size.name === "Video" ? $scope.size.height - this.width() - 14 : $scope.size.height - this.width() - 4;
              },
              preserveAspectRatio: 'xMaxYMax meet',
              editable: {
                display: {
                 'Hide': 'none',
                 'Show': 'block'
                }
              }
          }];
          }
        }
        ]);
      }
    };
  });
