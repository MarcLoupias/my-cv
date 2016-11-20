(function (angular) {
    'use strict';

    angular
        .module('app.home')
        .controller('MainController', MainController);

    MainController.$inject = ['skillsInfosService', 'dataService'];

    function MainController(skillsInfosService, dataService) {
        var vm = this;

        dataService.getJson()
            .then(function (res) {
                    vm.gnrlInfos = res.data.generalInformations;
                    vm.jobs = res.data.jobs;
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
