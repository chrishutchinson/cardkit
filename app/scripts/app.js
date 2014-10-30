'use strict';

/**
 * @ngdoc overview
 * @name cardkitApp
 * @description
 * # cardkitApp
 *
 * Main module of the application.
 */
angular
  .module('cardkitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
