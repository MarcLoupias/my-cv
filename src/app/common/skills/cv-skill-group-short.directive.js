(function (angular) {
    'use strict';

    angular
        .module('app.common.skills')
        .directive('cvSkillGroupShort', cvSkillGroupShortDirective);

    function cvSkillGroupShortDirective() {
        return {
            templateUrl: 'app/common/skills/cv-skill-group-short.html',
            restrict: 'E',
            scope: {
                skillGroup: '=skillGroup'
            }
        };
    }

})(angular);
