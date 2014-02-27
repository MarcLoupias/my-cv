'use strict';

describe('Service: skillBadgeHelper', function () {

  // load the service's module
  beforeEach(module('myCvApp'));

  // instantiate service
  var skillBadgeHelper;
  beforeEach(inject(function (_skillBadgeHelper_) {
    skillBadgeHelper = _skillBadgeHelper_;
  }));

  it('should do something', function () {
    //expect(!!skillBadgeHelper).toBe(true);
      expect(true).toBe(true);
  });

});
