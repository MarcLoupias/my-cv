'use strict';

angular.module('myCvApp')
    .factory('skillsInfosService', function ($modal) {

        return {
            displaySkillsInfos: function () {

                var ModalInstanceCtrl;

                ModalInstanceCtrl = function ($scope, $modalInstance) {
                    $scope.ok = function () {
                        $modalInstance.close();
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                };

                var modalInstance = $modal.open({
                    templateUrl: 'views/modals/skills-infos-service-modal-tpl.html',
                    controller: ModalInstanceCtrl
                });

                return modalInstance.result;
            }
        };
    });
