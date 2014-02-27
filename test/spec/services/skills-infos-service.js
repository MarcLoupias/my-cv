'use strict';

describe('Service: skillsInfosService', function () {

  // load the service's module
  beforeEach(module('myCvApp'));

  // instantiate service
  var skillsInfosService;
  beforeEach(inject(function (_skillsInfosService_) {
    skillsInfosService = _skillsInfosService_;
  }));

  it('should do something', function () {
    expect(!!skillsInfosService).toBe(true);
  });

});
