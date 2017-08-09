'use strict';

/**
 * @ngdoc directive
 * @name cardkitApp.directive:showhideEditor
 * @description
 * # showhideEditor
 */
angular.module('cardkitApp')
  .directive('showhideEditor', function () {
    return {
      template: '<div class="showhideEditor">' +
          '<label ng-repeat="(name, value) in field" ng-init="element.display=element.defaultDisplay()">' +
            '<input type="radio" ng-model="element.display" ng-value="value" name="{{element.name}}">{{name}}' +
          '</label>' +
      '</div>',
      restrict: 'E',
      replace: true,
  	  scope: {
  	    element: '=',
        field: '=',
        options: '='
  	  },
    };
  });
