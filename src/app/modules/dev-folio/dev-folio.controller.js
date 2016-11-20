(function (angular) {
    'use strict';

    angular
        .module('app.devFolio')
        .controller('DevFolioController', DevFolioController);

    DevFolioController.$inject = ['dataService'];

    function DevFolioController(dataService) {
        var vm = this;

        dataService.getJson()
            .then(function (res) {
                    vm.devfolio = res.data.devfolio;
                }, function () {
                    alert('c la fote a windoze !');
                }
            );
    }

})(angular);
