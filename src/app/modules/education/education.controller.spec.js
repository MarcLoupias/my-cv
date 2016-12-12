(function (angular) {
    'use strict';

    describe('app.education.EducationController', function () {
        describe('when i start EducationController', function () {
            var controller;
            var log;

            beforeEach(function () {
                angular.mock.module('app.education');
            });

            beforeEach(function () {
                angular.mock.inject(injectDep);

                function injectDep($controller, _$log_) {
                    controller = $controller;
                    log = _$log_;

                    spyOn(log, 'debug');
                }
            });

            it('should init data when dataService.data.degrees values', function () {
                var dataService = {
                    data: {
                        degrees: {
                            toto: 'toto',
                            bibi: 'bibi'
                        }
                    }
                };

                var EducationController = controller('EducationController', {
                    dataService: dataService,
                    $log: log
                });

                expect(EducationController.degrees).toBeDefined();
                expect(EducationController.degrees).toEqual(dataService.data.degrees);
                expect(log.debug).toHaveBeenCalled();
            });
        });
    });

})(angular);
