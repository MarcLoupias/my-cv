(function (angular) {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['dataService', '$log', 'loaderService'];

    function IndexController(dataService, $log, loaderService) {
        var vm = this;

        init();

        function init() {
            $log.debug('app.IndexController.init()', 'start');

            dataService.init()
                .then(function initSuccess() {
                    vm.gnrlInfos = dataService.data.gnrlInfos;
                    $log.debug('app.IndexController.init()', 'dataService.init() loaded');
                })
                .catch(function initError() {
                    $log.debug('app.IndexController.init()', 'dataService.init() error');
                })
                .finally(function initFinally() {
                    loaderService.done();
                });

            vm.loader = loaderService;
            vm.isBurgerCollapsed = true;

            $log.debug('app.IndexController.init()', 'end');
        }
    }

})(angular);
