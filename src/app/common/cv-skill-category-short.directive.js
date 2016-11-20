(function (angular) {
    'use strict';

    angular
        .module('app.common')
        .directive('cvSkillCategoryShort', cvSkillCategoryShortDirective);

    function cvSkillCategoryShortDirective() {
        var template = '<div class="panel panel-default">';
        template += '       <div class="panel-body">';
        template += '           <p><i class="glyphicon glyphicon-arrow-down"></i><strong>{{skillCategory.name}}</strong></p>';
        template += '           <cv-skill-group-short ng-repeat="skillGroup in skillCategory.skillGroups" skill-group="skillGroup"></cv-skill-group-short>';
        template += '       </div>';
        template += '   </div>';

        return {
            template: template,
            restrict: 'E',
            scope: {
                skillCategory: '=skillCategory'
            }
        };
    }

})(angular);
