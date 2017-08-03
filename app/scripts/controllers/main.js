'use strict';

/**
 * @ngdoc function
 * @name cardkitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardkitApp
 */
angular.module('cardkitApp')
  .controller('MainCtrl', function ($scope, $location, $analytics, saveSvgAsPng, themeConfig, templateConfig) {
  if (!$scope.googleInfo){ //ooh dirty. ah well. todo: as service
    $location.path('/login');
  }
  $analytics.pageTrack('/homepage');

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
          width: 486,
          height: 254,
          gridSize: 12.15
        },
        {
          name: 'FT Article',
          width: 600,
          height: 295,
          gridSize: 15
        },
        {
          name: 'Video',
          width: 1024,
          height: 576,
          gridSize: 16.25
        }
      ],
      themes: themeConfig,
      templates: templateConfig,
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
      }
    };

    function createConfigCopy() {
      $scope.defaultConfig = angular.copy($scope.config);
      $scope.$broadcast('resetSvg');
    }

    if(typeof $scope.config.themes !== 'undefined') {
      $scope.theme = ($scope.config.themes.length > 1) ? null : $scope.config.themes[0];
    }

    if (typeof $scope.config.templates !== 'undefined') {
      $scope.config.svg.elements = ($scope.config.templates.length > 1) ? null : $scope.config.template[0]($scope);
    }

    $scope.size = ($scope.config.sizes.length > 1) ? null : $scope.config.sizes[0];

    $scope.$watch('theme', function() {
      $scope.$broadcast('changeTheme');
      createConfigCopy();
    });

    $scope.$watch('template', function(template) {
      if (!template) {
        return;
      }
      $scope.config.svg.elements = template.elements($scope);
      $scope.$broadcast('changeTemplate');
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
      readFile(angular.element(file)[0].files[0], this.element);
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

    $scope.removeImage = function() {
      this.element.src = '';
    };

    $scope.display = function() {
      return 'block'
    }

    $scope.downloadSvg = function() {
      $analytics.eventTrack($scope.template.name, {
        category: 'save',
        label:  $scope.size.name
      });
      saveSvgAsPng(document.getElementById('snap-svg'), 'image.png', {
        scale: $scope.config.output.scale
      });
    };
  });
