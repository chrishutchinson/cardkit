'use strict';

/**
 * @ngdoc directive
 * @name cardkitApp.directive:imageEditor
 * @description
 * # imageEditor
 */
angular.module('cardkitApp')
  .directive('imageEditor', function () {
    return {
      template: '<div>' +
            '<label>Image</label>' +
            '<div ng-if="field === true" class="dropzone" drop="onDrop($data, $event, key)" drop-effect="copy" drop-accept="\'Files\'" drag-over-class="drag-over-accept">' +

              '<div class="fileInputWrapper button">' +
                '<span>or select an image</span>' +
                '<input onchange="angular.element(this).scope().fileChanged(this, event)" data-key="{{key}}" type="file" accept="image/*" />' +
              '</div>' +

            '</div>' +

            '<select ng-model="element.src" ng-options="name for (name, value) in field" class="form-control" ng-if="field !== true && field !== false">' +
              '<option value="">-- Select an image --</option>' +
            '</select>' +

            '<button ng-show="config.elements[key].src !== \'\'" ng-click="removeImage(key)" class="button button-danger"><i class="fa fa-times"></i> Remove Image</button>' +
          '</div>',
      restrict: 'E',
      scope: {
        key: '=',
        onDrop: '=',
        removeImage: '=',
        fileChanged: '=fileChanged',
        field: '=',
        element: '='
      },
      link: function(scope, element) {
        if(scope.element.src === '' || typeof scope.element.src === 'undefined') {
          if(angular.isObject(scope.field)) {
            scope.element.src = scope.field[Object.keys(scope.field)[0]];
          }
        }
      }
    };
  });
