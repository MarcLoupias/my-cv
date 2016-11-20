(function (angular) {
    'use strict';

    angular
        .module('app.common')
        .directive('cvSkillShort', cvSkillShortDirective);

    function cvSkillShortDirective() {
        return {
            templateUrl: 'app/common/cv-skill-short.html',
            restrict: 'E',
            scope: {
                skill: '=skill'
            }
        };
    }

})(angular);
