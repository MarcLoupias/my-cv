(function (angular) {
    'use strict';

    angular
        .module('app.common')
        .directive('cvSkillBadgeLevel', cvSkillBadgeLevelDirective);

    function cvSkillBadgeLevelDirective() {
        return {
            templateUrl: 'app/common/cv-skill-badge-level.html',
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
