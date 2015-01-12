'use strict';

/**
 * @ngdoc service
 * @name cardkitApp.saveSvgAsPng
 * @description
 * # saveSvgAsPng
 * Service in the cardkitApp.
 */
angular.module('cardkitApp')
  .service('saveSvgAsPng', function ($window) {
    return $window.saveSvgAsPng;
  });
