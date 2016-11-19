(function (angular) {
    'use strict';

    angular
        .module('app')
        .run(runBlock);

    runBlock.$inject = ['$log'];

    function runBlock($log) {
        $log.debug('runBlock end');
    }

})(angular);
