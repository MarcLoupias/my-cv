(function (angular) {
    'use strict';

    angular
        .module('app.devFolio')
        .controller('DevFolioController', DevFolioController);

    DevFolioController.$inject = ['dataService', '$log'];

    function DevFolioController(dataService, $log) {
        var vm = this;

        init();

        function init() {
            $log.debug('app.devFolio.DevFolioController.init()', 'start');
            vm.devfolio = dataService.data.devfolio;
            $log.debug('app.devFolio.DevFolioController.init()', 'end');
        }
    }

})(angular);
