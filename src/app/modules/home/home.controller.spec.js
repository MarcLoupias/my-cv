(function (angular) {
    'use strict';

    describe('app.home.MainController', function () {
        describe('when i start MainController', function () {
            var controller;
            var log;

            beforeEach(function () {
                angular.mock.module('app.home');
            });

            beforeEach(function () {
                angular.mock.inject(injectDep);

                function injectDep($controller, _$log_) {
                    controller = $controller;
                    log = _$log_;

                    spyOn(log, 'debug');
                }
            });

            it('should init data with dataService.data.degrees values and bind skillsInfosModal.displaySkillsInfos fn', function () {
                var skillsInfosModal = {
                    displaySkillsInfos: function () {
                        angular.noop();
                    }
                };

                var dataService = {
                    data: {
                        gnrlInfos: {
                            toto: 'toto',
                            bibi: 'bibi'
                        },
                        jobs: {
                            toto: 'toto',
                            bibi: 'bibi'
                        },
                        skillCategories: {
                            toto: 'toto',
                            bibi: 'bibi'
                        }
                    }
                };

                var MainController = controller('MainController', {
                    skillsInfosModal: skillsInfosModal,
                    dataService: dataService,
                    $log: log
                });

                expect(MainController.gnrlInfos).toBeDefined();
                expect(MainController.gnrlInfos).toEqual(dataService.data.gnrlInfos);
                expect(MainController.jobs).toBeDefined();
                expect(MainController.jobs).toEqual(dataService.data.jobs);
                expect(MainController.skillCategories).toBeDefined();
                expect(MainController.skillCategories).toEqual(dataService.data.skillCategories);
                expect(typeof MainController.displaySkillLegend).toEqual('function');
                expect(log.debug).toHaveBeenCalled();
            });
        });
    });

})(angular);
