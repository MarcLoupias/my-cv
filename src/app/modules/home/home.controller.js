(function (angular) {
    'use strict';

    angular
        .module('app.home')
        .controller('MainController', MainController);

    MainController.$inject = ['skillsInfosModal', 'dataService', '$log'];

    function MainController(skillsInfosModal, dataService, $log) {
        var vm = this;

        init();

        function init() {
            $log.debug('app.home.MainController.init()', 'start');
            vm.displaySkillLegend = skillsInfosModal.displaySkillsInfos;

            vm.gnrlInfos = dataService.data.gnrlInfos;
            vm.jobs = dataService.data.jobs;
            vm.skillCategories = dataService.data.skillCategories;
            $log.debug('app.home.MainController.init()', 'end');
        }
    }

})(angular);
