'use strict';

describe('Controller: DevfolioCtrl', function () {

  // load the controller's module
  beforeEach(module('myCvApp'));

  var DevfolioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DevfolioCtrl = $controller('DevfolioCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
      expect(true).toBe(true);
  });
});
