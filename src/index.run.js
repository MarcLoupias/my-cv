(function (angular) {
    'use strict';

    angular
        .module('app')
        .run(runWebapp);

    runWebapp.$inject = ['$log', 'loaderService'];

    function runWebapp($log, loaderService) {
        $log.debug('app.runWebapp()', 'start');
        loaderService.start();
        $log.debug('app.runWebapp()', 'end');
    }

})(angular);
