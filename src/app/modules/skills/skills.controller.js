'use strict';

angular.module('app.skills')
    .controller('SkillsCtrl', ['$scope', 'skillsInfosService', 'dataService', function ($scope, skillsInfosService, dataService) {

        dataService.getJson().then(function (res) {
                $scope.skillCategories = res.data.skillCategories;
            }, function() {
                alert('c la fote a windoze !');
            }
        );

        $scope.displaySkillLegend = function () {
            skillsInfosService.displaySkillsInfos();
        };
    }]);
