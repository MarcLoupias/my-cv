'use strict';

angular.module('app')
    .factory('skillsInfosService', ['$modal', function ($modal) {

        return {
            displaySkillsInfos: function () {

                var ModalInstanceCtrl;

                ModalInstanceCtrl = ['$scope', '$modalInstance', function ($scope, $modalInstance) {
                    $scope.ok = function () {
                        $modalInstance.close();
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                }];

                var modalInstance = $modal.open({
                    templateUrl: 'app/views/modals/skills-infos-service-modal-tpl.html',
                    controller: ModalInstanceCtrl
                });

                return modalInstance.result;
            }
        };
    }]);
