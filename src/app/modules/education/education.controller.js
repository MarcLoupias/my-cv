(function (angular) {
    'use strict';

    angular
        .module('app.education')
        .controller('EducationController', EducationController);

    EducationController.$inject = ['dataService'];

    function EducationController(dataService) {
        var vm = this;

        dataService.getJson()
            .then(function (res) {
                    vm.degrees = res.data.degrees;
                }, function () {
                    alert('c la fote a windoze !');
                }
            );
    }

})(angular);
