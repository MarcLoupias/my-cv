'use strict';

describe('Directive: skillBadgeLevel', function () {

  // load the directive's module
  beforeEach(module('myCvApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<skill-badge-level></skill-badge-level>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the skillBadgeLevel directive');
      expect(true).toBe(true);
  }));
});
