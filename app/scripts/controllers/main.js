'use strict';

angular.module('myCvApp')
    .controller('MainCtrl', function ($scope, skillsInfosService, dataService) {

        dataService.getJson().then(function (res) {
                $scope.jobs = res.data.jobs;
                $scope.skillCategories = res.data.skillCategories;
            }, function() {
                alert('c la fote a windoze !');
            }
        );

        $scope.displaySkillLegend = function () {
            skillsInfosService.displaySkillsInfos();
        };
    });
