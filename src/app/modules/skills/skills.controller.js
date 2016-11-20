(function (angular) {
    'use strict';

    angular
        .module('app.skills')
        .controller('SkillsController', SkillsController);

    SkillsController.$inject = ['$scope', 'skillsInfosService', 'dataService'];

    function SkillsController($scope, skillsInfosService, dataService) {
        dataService.getJson()
            .then(function (res) {
                    $scope.skillCategories = res.data.skillCategories;
                }, function () {
                    alert('c la fote a windoze !');
                }
            );

        $scope.displaySkillLegend = function () {
            skillsInfosService.displaySkillsInfos();
        };
    }

})(angular);
