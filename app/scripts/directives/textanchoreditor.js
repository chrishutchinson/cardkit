'use strict';

/**
 * @ngdoc directive
 * @name cardkitApp.directive:textanchorEditor
 * @description
 * # textanchorEditor
 */
angular.module('cardkitApp')
  .directive('textanchorEditor', function () {
    return {
      template: '<div>' +
            '<label>Text Anchor</label>' +
            '<select ng-model="element.textAnchor" class="form-control">' +
              '<option value="">-- Select a Text Anchor --</option>' +
              '<option value="start">Start</option>' +
              '<option value="middle">Middle</option>' +
              '<option value="end">End</option>' +
            '</select>' +
          '</div>',
      restrict: 'E',
      replace: true,
  	  scope: {
  	    element: '='
  	  },
    };
  });
