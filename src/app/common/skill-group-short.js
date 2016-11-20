(function (angular) {
    'use strict';

    angular
        .module('app.common')
        .directive('skillGroupShort', skillGroupShortDirective);

    function skillGroupShortDirective() {
        var template = '<div>';
        template += '<h4><small>{{skillGroup.name}}</small></h4>';
        template += '<p>';
        template += '<span><skill-short ng-repeat="skill in skillGroup.skills" skill="skill"></skill-short></span>';
        template += '</p>';
        template += '</div>';

        return {
            template: template,
            restrict: 'E',
            scope: {
                skillGroup: '=skillGroup'
            }
        };
    }

})(angular);
