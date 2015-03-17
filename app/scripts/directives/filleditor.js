'use strict';

/**
 * @ngdoc directive
 * @name cardkitApp.directive:fillEditor
 * @description
 * # fillEditor
 */
angular.module('cardkitApp')
  .directive('fillEditor', function () {
    return {
      template: '<div><label>Fill Color</label><input colorpicker type="text" ng-model="element.fill" ng-if="field == \'picker\'" class="form-control" /><select ng-model="element.fill" ng-options="name for (name, value) in field" class="form-control" ng-if="field != \'picker\'"><option value="">-- Select a Fill Color --</option></select></div>',
      restrict: 'E',
      scope: {
      	field: '=',
      	element: '='
      },
    };
  });
