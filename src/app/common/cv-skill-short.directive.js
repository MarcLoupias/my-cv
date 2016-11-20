(function (angular) {
    'use strict';

    angular
        .module('app.common')
        .directive('cvSkillShort', cvSkillShortDirective);

    function cvSkillShortDirective() {
        var template = '{{skill.name}} <cv-skill-badge-level level="skill.level"></cv-skill-badge-level> ';
        template += '<a ng-if="(skill.skillUrl != undefined)" href="{{skill.skillUrl}}" title="{{skill.skillUrlTitle}}" target="_blank">';
        template += '   <i class="glyphicon glyphicon-link"></i>';
        template += '</a>';

        return {
            template: template,
            restrict: 'E',
            scope: {
                skill: '=skill'
            }
        };
    }

})(angular);
