(function (angular) {
    'use strict';

    angular
        .module('app.common.skills')
        .directive('cvSkillBadgeLevel', cvSkillBadgeLevelDirective);

    function cvSkillBadgeLevelDirective() {
        return {
            templateUrl: 'app/common/skills/cv-skill-badge-level.html',
            restrict: 'E',
            scope: {
                level: '=level'
            },
            replace: true,
            controller: CvSkillBadgeLevelController,
            controllerAs: 'badgeLevelCtrl',
            bindToController: true
        };
    }

    CvSkillBadgeLevelController.$inject = ['skillBadgeHelper'];

    function CvSkillBadgeLevelController(skillBadgeHelper) {
        var vm = this;

        init();

        function init() {
            vm.badgeHelperService = skillBadgeHelper;
        }
    }

})(angular);
