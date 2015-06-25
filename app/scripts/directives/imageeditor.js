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
            '<div class="warning label"><em>Heads Up!</em> Only images from the story you are tweeting can be used and then only if they are <em>FT-owned</em> or come from <em>Getty, Reuters, Dreamstime</em> or <em>Bloomberg</em></div>' +
            '<div class="dropzone" drop="onDrop($data, $event, key)" drop-effect="copy" drop-accept="\'Files\'" drag-over-class="drag-over-accept">' +
              '<div class="fileInputWrapper button">' +
                '<span>or select an image</span>' +
                '<input onchange="angular.element(this).scope().$parent.fileChanged(this, event)" data-key="{{key}}" type="file" accept="image/*" />' +
              '</div>' +

            '</div>' +
            '<button ng-show="config.elements[key].src !== \'\'" ng-click="removeImage(key)" class="button button-danger"><i class="fa fa-times"></i> Remove Image</button>' +
          '</div>',
      restrict: 'E',
      scope: {
        key: '=',
        onDrop: '=',
        element: '=',
        removeImage: '=',
      },
    };
  });
