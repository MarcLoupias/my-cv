(function (angular) {
    'use strict';

    angular
        .module('app.workExperiences')
        .controller('WorkExperiencesController', WorkExperiencesController);

    WorkExperiencesController.$inject = ['dataService', '$log'];

    function WorkExperiencesController(dataService, $log) {
        var vm = this;

        init();

        function init() {
            $log.debug('app.workExperiences.WorkExperiencesController.init()', 'start');
            vm.jobs = dataService.data.jobs;
            $log.debug('app.workExperiences.WorkExperiencesController.init()', 'end');
        }
    }

})(angular);
