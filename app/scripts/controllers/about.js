'use strict';

/**
 * @ngdoc function
 * @name testSimulatorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testSimulatorApp
 */
angular.module('testSimulatorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
