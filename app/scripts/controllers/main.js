'use strict';

/**
 * @ngdoc function
 * @name testSimulatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testSimulatorApp
 */
angular.module('testSimulatorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
