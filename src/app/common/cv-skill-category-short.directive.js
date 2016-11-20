(function (angular) {
    'use strict';

    angular
        .module('app.common')
        .directive('cvSkillCategoryShort', cvSkillCategoryShortDirective);

    function cvSkillCategoryShortDirective() {
        return {
            templateUrl: 'app/common/cv-skill-category-short.html',
            restrict: 'E',
            scope: {
                skillCategory: '=skillCategory'
            }
        };
    }

})(angular);
