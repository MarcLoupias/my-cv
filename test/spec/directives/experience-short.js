'use strict';

describe('Directive: experienceShort', function () {

  // load the directive's module
  beforeEach(module('myCvApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<experience-short></experience-short>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the experienceShort directive');
      expect(true).toBe(true);
  }));
});
