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
          name: 'Email',
          width: 1000,
          height: 330,
        }
      ],
      themes: themeConfig,
      svg: {
        canvas: {
          height: function() {
            return $scope.size.height;
          },
          width: function() {
            return $scope.size.width;
          },
          fill: '#FFFFFF'
        },
        elements: [
          {
            name: 'Background',
            type: 'image',
            width: function() {
              return $scope.size.width;
            },
            height: function() {
              return $scope.size.height;
            },
            src: function() {
              return $scope.theme.backgroundSrc;
            },
            opacity: 1,
            x: '0%',
            y: '0%',
            draggable: false,
            editable: false
          },
          {
            name: 'Image',
            type: 'image',
            width: 200,
            height: function() {
              return this.width;
            },
            src: '',
            opacity: 1,
            x: '50%',
            y: '50%',
            preserveAspectRatio: 'xMinYMin meet',
            draggable: true,
            editable: {
              src: true,
              width: true,
            }
          },
          {
            name: 'Title',
            type: 'text',
            text: function() {
              return $scope.theme.title;
            },
            fill: function() {
              return $scope.theme.color;
            },
            fontSize: 100,
            fontFamily: '"TimesModern-Bold-Italic"',
            x: 30,
            y: 115,
            draggable: false,
            editable: false,
          },
          {
            name: 'Title',
            type: 'text',
            text: 'This week: ',
            fill: function() {
              return $scope.theme.color;
            },
            fontSize: 50,
            fontFamily: '"TimesModern-Regular-Italic"',
            x: 30,
            y: 190,
            draggable: false,
            editable: {
              text: true
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
