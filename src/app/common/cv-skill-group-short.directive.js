(function (angular) {
    'use strict';

    angular
        .module('app.common')
        .directive('cvSkillGroupShort', cvSkillGroupShortDirective);

    function cvSkillGroupShortDirective() {
        return {
            templateUrl: 'app/common/cv-skill-group-short.html',
            restrict: 'E',
            scope: {
                skillGroup: '=skillGroup'
            }
        };
    }

})(angular);
