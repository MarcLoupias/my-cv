(function (angular) {
    'use strict';

    angular
        .module('app.workExperiences')
        .controller('WorkExperiencesController', WorkExperiencesController);

    WorkExperiencesController.$inject = ['dataService'];

    function WorkExperiencesController(dataService) {
        var vm = this;

        dataService.getJson()
            .then(function (res) {
                    vm.jobs = res.data.jobs;
                }, function () {
                    alert('c la fote a windoze !');
                }
            );
    }

})(angular);
