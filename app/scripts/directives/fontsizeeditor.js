'use strict';

/**
 * @ngdoc directive
 * @name cardkitApp.directive:fontsizeEditor
 * @description
 * # fontsizeEditor
 */
angular.module('cardkitApp')
  .directive('fontsizeEditor', function () {
    return {
      template: '<div>'+
            '<label>Font Size</label>'+
            '<select ng-model="element.fontSize" ng-options="name for (name, value) in field" class="form-control">'+
              '<option value="">-- Select a Font Size --</option>'+
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
