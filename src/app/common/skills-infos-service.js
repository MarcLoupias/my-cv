'use strict';

angular.module('app.common')
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
                    templateUrl: 'app/common/skills-infos-service-modal.html',
                    controller: ModalInstanceCtrl
                });

                return modalInstance.result;
            }
        };
    }]);
