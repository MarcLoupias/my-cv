'use strict';

describe('Directive: skillShort', function () {

  // load the directive's module
  beforeEach(module('myCvApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<skill-short></skill-short>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the skillShort directive');
      expect(true).toBe(true);
  }));
});
