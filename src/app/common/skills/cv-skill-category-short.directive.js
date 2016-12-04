(function (angular) {
    'use strict';

    angular
        .module('app.common.skills')
        .directive('cvSkillCategoryShort', cvSkillCategoryShortDirective);

    function cvSkillCategoryShortDirective() {
        return {
            templateUrl: 'app/common/skills/cv-skill-category-short.html',
            restrict: 'E',
            scope: {
                skillCategory: '=skillCategory'
            }
        };
    }

})(angular);
