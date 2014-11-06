'use strict';

describe('Controller: SimCtrl', function () {

  // load the controller's module
  beforeEach(module('testSimulatorApp'));

  var SimCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SimCtrl = $controller('SimCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
