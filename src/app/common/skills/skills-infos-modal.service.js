(function (angular) {
    'use strict';

    angular
        .module('app.common.skills')
        .factory('skillsInfosModal', skillsInfosModalService);

    skillsInfosModalService.$inject = ['$uibModal'];

    function skillsInfosModalService($uibModal) {
        return {
            displaySkillsInfos: function () {
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/common/skills/skills-infos-modal.html'
                });

                return modalInstance.result;
            }
        };
    }

})(angular);
