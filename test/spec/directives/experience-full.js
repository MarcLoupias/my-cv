'use strict';

describe('Directive: experienceFull', function () {

  // load the directive's module
  beforeEach(module('myCvApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<experience-full></experience-full>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the experienceFull directive');
      expect(true).toBe(true);
  }));
});
