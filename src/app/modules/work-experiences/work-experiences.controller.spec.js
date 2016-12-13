(function (angular) {
    'use strict';

    describe('app.workExperiences.WorkExperiencesController', function () {
        describe('when i start WorkExperiencesController', function () {
            var controller;
            var log;

            beforeEach(function () {
                angular.mock.module('app.workExperiences');
            });

            beforeEach(function () {
                angular.mock.inject(injectDep);

                function injectDep($controller, _$log_) {
                    controller = $controller;
                    log = _$log_;

                    spyOn(log, 'debug');
                }
            });

            it('should init data with dataService.data.degrees values', function () {
                var dataService = {
                    data: {
                        jobs: {
                            toto: 'toto',
                            bibi: 'bibi'
                        }
                    }
                };

                var WorkExperiencesController = controller('WorkExperiencesController', {
                    dataService: dataService,
                    $log: log
                });

                expect(WorkExperiencesController.jobs).toBeDefined();
                expect(WorkExperiencesController.jobs).toEqual(dataService.data.jobs);
                expect(log.debug).toHaveBeenCalled();
            });
        });
    });

})(angular);
