'use strict';

/**
 * @ngdoc overview
 * @name testSimulatorApp
 * @description
 * # testSimulatorApp
 *
 * Main module of the application.
 */
angular
  .module('testSimulatorApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
