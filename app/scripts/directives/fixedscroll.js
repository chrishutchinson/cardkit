'use strict';

/**
 * @ngdoc directive
 * @name cardkitApp.directive:fixedScroll
 * @description
 * # fixedScroll
 */
angular.module('cardkitApp')
  .directive('fixedScroll', function ($window) {
    return function(scope, element, attrs) {
    	var offset = element.offset().top-20;
    	angular.element($window).bind('scroll', function() {
    		if(angular.element($window).scrollTop() >= offset) {
    			element.addClass('fixed');
    		} else {
    			element.removeClass('fixed');
    		}
    	});
   	};
  });
