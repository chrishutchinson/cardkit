'use strict';

/**
 * @ngdoc directive
 * @name cardkitApp.directive:fontstyleEditor
 * @description
 * # fontstyleEditor
 */
angular.module('cardkitApp')
  .directive('fontstyleEditor', function () {
    return {
      template: '<div>'+
            '<label>Font Style</label>'+
            '<select ng-model="element.fontStyle" ng-options="name for (name, value) in field" class="form-control">'+
              '<option value="">-- Select a Font Style --</option>'+
            '</select>'+
          '</div>',
      restrict: 'E',
      replace: true,
  	  scope: {
      	element: '=',
  	    field: '='
  	  },
    };
  });
