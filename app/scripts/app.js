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
    'colorpicker.module',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    /*$routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          'configData': function(themeConfigProvider){
            var data = themeConfigProvider();
            console.log(data);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });*/
    //

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
      });
  });
