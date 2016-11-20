(function (angular) {
    'use strict';

    angular
        .module('app.common')
        .directive('skillShort', skillShortDirective);

    function skillShortDirective() {
        var template = '{{skill.name}} <skill-badge-level level="skill.level"></skill-badge-level> ';
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
