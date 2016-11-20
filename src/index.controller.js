(function (angular) {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['dataService'];

    function IndexController(dataService) {
        var vm = this;

        vm.pending = true;

        dataService.getJson()
            .then(function (res) {
                    vm.gnrlInfos = res.data.generalInformations;
                    vm.pending = false;
                }, function () {
                    alert('c la fote a windoze !');
                }
            );
    }

})(angular);
