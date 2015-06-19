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
    'ngTouch',
    'colorpicker.module',
    'draganddrop',
    'ui.router',
    'angular-google-auth'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');

    // Now set up the states
    $stateProvider
      .state('index', {
        url: '/',
        controller: 'MainCtrl',
        templateUrl: 'views/main.html',
        resolve: {
          themeConfig: function(themeConfigProvider) {
            return themeConfigProvider;
          }
        }
      }).state('login', {
        url: '/login',
        controller: 'LoginCtrl',
        templateUrl: 'views/login.html'
      });
  });
