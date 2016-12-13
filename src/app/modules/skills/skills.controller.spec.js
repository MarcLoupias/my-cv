(function (angular) {
    'use strict';

    describe('app.skills.SkillsController', function () {
        describe('when i start SkillsController', function () {
            var controller;
            var log;

            beforeEach(function () {
                angular.mock.module('app.skills');
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
                        skillCategories: {
                            toto: 'toto',
                            bibi: 'bibi'
                        }
                    }
                };

                var SkillsController = controller('SkillsController', {
                    skillsInfosModal: skillsInfosModal,
                    dataService: dataService,
                    $log: log
                });

                expect(SkillsController.skillCategories).toBeDefined();
                expect(SkillsController.skillCategories).toEqual(dataService.data.skillCategories);

                expect(typeof SkillsController.displaySkillLegend).toEqual('function');
                expect(log.debug).toHaveBeenCalled();
            });
        });
    });

})(angular);
