'use strict';

angular.module('myCvApp')
    .controller('MainCtrl', function ($scope, skillsInfosService) {

        $scope.displaySkillLegend = function () {
            skillsInfosService.displaySkillsInfos();
        };
    });
