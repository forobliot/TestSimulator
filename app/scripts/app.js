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
    'ngSanitize',
    'angularCharts'
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
      .when('/sim', {
        templateUrl: 'views/sim.html',
        controller: 'SimCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
