'use strict';

angular.module('myCvApp')
    .directive('skillShort', function () {

        var template = '{{skill.name}} <span class="badge" ng-class="badgeHelperService.getBadgeClass(skill.level)">{{skill.level}}</span> ';
        template += '<a ng-if="(skill.skillUrl != undefined)" href="{{skill.skillUrl}}" title="{{skill.skillUrlTitle}}" target="_blank">';
        template += '   <i class="glyphicon glyphicon-link"></i>';
        template += '</a>';

        return {
            template: template,
            restrict: 'E',
            scope: {
                skill:'=skill'
            },
            controller: function ($scope, skillBadgeHelper) {
                $scope.badgeHelperService = skillBadgeHelper;
            }
        };
    });
