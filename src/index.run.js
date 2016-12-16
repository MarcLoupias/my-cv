(function (angular) {
    'use strict';

    angular
        .module('app')
        .run(runWebapp);

    runWebapp.$inject = ['$log', 'loaderService', 'Analytics'];

    function runWebapp($log, loaderService, Analytics) {
        $log.debug('app.runWebapp()', 'start');
        loaderService.start();
        Analytics.pageView();
        $log.debug('app.runWebapp()', 'end');
    }

})(angular);
