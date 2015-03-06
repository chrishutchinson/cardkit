'use strict';

/**
 * @ngdoc function
 * @name cardkitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardkitApp
 */
angular.module('cardkitApp')
  .controller('MainCtrl', function ($scope, saveSvgAsPng, themeConfig) {
    
    $scope.config = {
      sizes: [
        {
          name: 'Facebook',
          width: 800,
          height: 370,
        },
        {
          name: 'Twitter',
          width: 650,
          height: 320,
        },
        {
          name: 'Video',
          width: 640,
          height: 360,
        },
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
    		},
    		elements: [
          {
            name: 'Background Colour',
            type: 'rect',
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
            name: 'Logo',
            type: 'image',
            width: 250,
            height: function() {
              return this.width;
            },
            src: function() {
              return $scope.theme.logoSrc;
            },
            opacity: 1,
            x: 50,
            y: 270,
            preserveAspectRatio: 'xMinYMin meet',
            editable: {
              src: true,
              width: true,
            },
            draggable: true
          },
          {
            name: 'Credit',
            type: 'text',
            text: 'Credit: Insert name here',
            fill: function() {
              return $scope.theme.quote;
            },
            fontSize: 12,
            fontFamily: function() {
              return $scope.theme.headlineFont;
            },
            textAnchor: 'start',
            x: 50,
            y: 250,
            draggable: true,
            editable: {
              text: true,
              fontSize: {
                'Small': 12,
                'Medium': 18,
                'Large': 22,
                'Extra Large': 36,
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
            fontSize: 26,
            fontFamily: function() {
              return $scope.theme.headlineFont;
            },
            textAnchor: 'start',
            x: 50,
            y: 55,
            draggable: true,
            editable: {
              text: true,
              fill: 'picker',
              textAnchor: true,
              fontSize: {
                'Small (18px)': 18,
                'Medium (26px)': 26,
                'Large (32px)': 32,
                'Extra Large (32px)': 40,
              },
            },
          },
    		],
      }
  	};

    if(typeof $scope.config.themes !== 'undefined') {
      $scope.theme = ($scope.config.themes.length > 1) ? null : $scope.config.themes[0];
    }

    $scope.size = ($scope.config.sizes.length > 1) ? null : $scope.config.sizes[0];

    $scope.$watch('theme', function() {
      $scope.$broadcast('changeTheme');
    });

    $scope.$watch('size', function() {
      $scope.$broadcast('changeSize');
    });

    // Drop handler.
    $scope.onDrop = function (data, event, key) {
      var dataTransfer = getDataTransfer(event);
      readFile(dataTransfer.files[0], key);
    };

    // Read the supplied file (from DataTransfer API)
    function readFile(file, key) {
      var reader = new FileReader();

      reader.onload = function() { 
        $scope.config.svg.elements[key].src = reader.result;
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
