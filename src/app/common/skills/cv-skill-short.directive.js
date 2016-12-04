(function (angular) {
    'use strict';

    angular
        .module('app.common.skills')
        .directive('cvSkillShort', cvSkillShortDirective);

    function cvSkillShortDirective() {
        return {
            templateUrl: 'app/common/skills/cv-skill-short.html',
            restrict: 'E',
            scope: {
                skill: '=skill'
            }
        };
    }

})(angular);
