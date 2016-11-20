(function (angular) {
    'use strict';

    angular
        .module('app.skills')
        .controller('SkillsController', SkillsController);

    SkillsController.$inject = ['skillsInfosService', 'dataService'];

    function SkillsController(skillsInfosService, dataService) {
        var vm = this;

        dataService.getJson()
            .then(function (res) {
                    vm.skillCategories = res.data.skillCategories;
                }, function () {
                    alert('c la fote a windoze !');
                }
            );

        vm.displaySkillLegend = function () {
            skillsInfosService.displaySkillsInfos();
        };
    }

})(angular);
