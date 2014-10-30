'use strict';

/**
 * @ngdoc service
 * @name cardkitApp.snapSVG
 * @description
 * # snapSVG
 * Service in the cardkitApp.
 */
angular.module('cardkitApp')
  .service('snapSVG', function snapSVG($window) {
    return $window.Snap;
  });
