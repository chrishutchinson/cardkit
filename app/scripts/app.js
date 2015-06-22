/* globals ga */
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
    'angular-google-auth',
    'angulartics',
    'angulartics.google.analytics'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    (function addTracking() {
      (function (i, s, o, g, r, a, m) {
        i.GoogleAnalyticsObject = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments);
          }; i[r].l = 1 * new Date();
        a = s.createElement(o);
        m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

      ga('create', 'UA-60698836-2', 'auto');
    }());

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
          },
          templateConfig: function(templateConfigProvider) {
            return templateConfigProvider;
          }
        }
      }).state('login', {
        url: '/login',
        controller: 'LoginCtrl',
        templateUrl: 'views/login.html'
      });
  });
