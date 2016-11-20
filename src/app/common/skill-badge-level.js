(function (angular) {
    'use strict';

    angular
        .module('app.common')
        .directive('skillBadgeLevel', skillBadgeLevelDirective);

    function skillBadgeLevelDirective() {
        var template = '<span class="badge" ng-class="badgeHelperService.getBadgeClass(level)" ' +
            'popover-title="{{title}}" popover="{{text}}" ' +
            'popover-trigger="mouseenter">{{level}}</span> ';

        return {
            template: template,
            restrict: 'E',
            scope: {
                level: '=level'
            },
            controller: ['$scope', 'skillBadgeHelper', function ($scope, skillBadgeHelper) {
                $scope.badgeHelperService = skillBadgeHelper;
                $scope.title = $scope.badgeHelperService.getBadgeTitle($scope.level);
                $scope.text = $scope.badgeHelperService.getBadgeText($scope.level);
            }]
        };
    }

})(angular);
