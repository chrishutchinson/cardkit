'use strict';

/**
 * @ngdoc directive
 * @name cardkitApp.directive:opacityEditor
 * @description
 * # opacityEditor
 */
angular.module('cardkitApp')
  .directive('opacityEditor', function () {
    return {
      template: '<div>' +
            '<label>Opacity</label>' +
            '<input type="range" min="0" max="1" ng-model="element.opacity" step="0.05" />' +
          '</div>',
      restrict: 'E',
      replace: true,
  	  scope: {
  	    element: '=element'
  	  },
    };
  });
