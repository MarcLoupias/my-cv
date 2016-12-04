(function (angular) {
    'use strict';

    angular
        .module('app.skills')
        .controller('SkillsController', SkillsController);

    SkillsController.$inject = ['skillsInfosModal', 'dataService', '$log'];

    function SkillsController(skillsInfosModal, dataService, $log) {
        var vm = this;

        init();

        function init() {
            $log.debug('app.skills.SkillsController.init()', 'start');
            vm.displaySkillLegend = skillsInfosModal.displaySkillsInfos;

            vm.skillCategories = dataService.data.skillCategories;
            $log.debug('app.skills.SkillsController.init()', 'end');
        }
    }

})(angular);
