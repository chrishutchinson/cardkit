'use strict';

/**
 * @ngdoc function
 * @name cardkitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardkitApp
 */
angular.module('cardkitApp')
  .controller('MainCtrl', function ($scope, $location, saveSvgAsPng, themeConfig) {
  if (!$scope.googleInfo){ //ooh dirty. ah well. todo: as service
    $location.path('/login');
  }
    $scope.config = {
      sizes: [
        {
          name: 'Twitter',
          width: 650,
          height: 320,
          gridSize: 16.25
        },
        {
          name: 'Facebook',
          width: 800,
          height: 370,
          gridSize: 20
        },
        // {
        //   name: 'Video',
        //   width: 640,
        //   height: 360,
        // },
      ],
      themes: themeConfig,
      output: {
        scale: 2,
        editable: {
          scale: true
        }
      },
      svg: {
        canvas: {
          height: function() {
            return $scope.size.height;
          },
          width: function() {
            return $scope.size.width;
          },
          gridSize: function() {
            return $scope.size.gridSize;
          }
        },
        elements: [
          {
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
          },
          {
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
          },
          {
            name: 'Cross Reference Background',
            type: 'rect',
            controlsOrder: 5,
            height: function() {
              return $scope.size.gridSize*3;
            },
            width: function() {
              return $scope.size.width;
            },
            y : function() {
              return $scope.size.height - this.height();
            },
            fill: function() {
              return $scope.theme.xrefBackground;
            },
            editable: {
              fill: 'picker'
            }
          },
          {
            name: 'Logo',
            type: 'image',
            controlsOrder: 6,
            width: function() {
              return $scope.size.gridSize*2;
            },
            height: function() {
              return $scope.size.gridSize*2;
            },
            src: function() {
              return $scope.theme.logoSrc;
            },
            opacity: 1,
            x: function() {
              return $scope.size.width - ($scope.size.gridSize*3);
            },
            y: function() {
              var h = ($scope.size.gridSize)/2;
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
          },
          {
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
                'Small (16px)' : 16,
                'Large (18px)': 18,
              },
              fill: 'picker',
              textAnchor: true
            },
          },
          {
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
                'Small (16px)' : 16,
                'Large (18px)': 18,
              },
              fill: 'picker',
              textAnchor: true
            },
          },
          {
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
          },
        ],
      }
    };

    function createConfigCopy() {
      $scope.defaultConfig = angular.copy($scope.config);
      $scope.$broadcast('resetSvg');
    }

    if(typeof $scope.config.themes !== 'undefined') {
      $scope.theme = ($scope.config.themes.length > 1) ? null : $scope.config.themes[0];
    }

    $scope.size = ($scope.config.sizes.length > 1) ? null : $scope.config.sizes[0];

    $scope.$watch('theme', function() {
      $scope.$broadcast('changeTheme');
      createConfigCopy();
    });

    $scope.$watch('size', function() {
      $scope.$broadcast('changeSize');
      createConfigCopy();
    });

    $scope.resetSvg = function() {
      $scope.config.svg = $scope.defaultConfig.svg;
      createConfigCopy();
    };

    // Drop handler.
    $scope.onDrop = function (data, event) {
      var dataTransfer = getDataTransfer(event);
      readFile(dataTransfer.files[0], this.element);
    };

    $scope.fileChanged = function(file) {
      readFile(angular.element(file)[0].files[0], angular.element(file).data('key'));
    };

    // Read the supplied file (from DataTransfer API)
    function readFile(file, element) {
      var reader = new FileReader();

      reader.onload = function() {
        element.src = reader.result;
        $scope.$apply();
      };

      reader.readAsDataURL(file);
    }

    // Get the data transfer
    function getDataTransfer(event) {
      event.stopPropagation();
      event.preventDefault();
      return event.dataTransfer || null;
    }

    $scope.removeImage = function(key) {
      $scope.config.svg.elements[key].src = '';
    };


    $scope.downloadSvg = function() {
      saveSvgAsPng(document.getElementById('snap-svg'), 'image.png', {
        scale: $scope.config.output.scale
      });
    };
  });
