(function (angular) {
    'use strict';

    describe('app.common.skills.skillsInfosModal', function () {
        describe('when I call skillsInfosModal.displaySkillsInfos()', function () {
            var $uibModalMock;

            beforeEach(function () {
                $uibModalMock = {
                    open: function () {
                    }
                };

                angular.mock.module('app.common.skills');
                angular.mock.module('ui.bootstrap.modal', function ($provide) {
                    $provide.factory('$uibModal', function () {
                        return $uibModalMock;
                    });
                });

                spyOn($uibModalMock, 'open').and.returnValue({result: 'boubou'});
            });

            it('should call $uibModal.open', angular.mock.inject(function (skillsInfosModal) {
                skillsInfosModal.displaySkillsInfos();
                expect($uibModalMock.open).toHaveBeenCalled();
            }));

            it('should return modalInstance.result', angular.mock.inject(function (skillsInfosModal) {
                expect(skillsInfosModal.displaySkillsInfos()).toEqual('boubou');
            }));
        });
    });

})(angular);
