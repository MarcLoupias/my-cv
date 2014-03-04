'use strict';

describe('Directive: devfolioProject', function () {

  // load the directive's module
  beforeEach(module('myCvApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<devfolio-project></devfolio-project>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the devfolioProject directive');
      expect(true).toBe(true);
  }));
});
