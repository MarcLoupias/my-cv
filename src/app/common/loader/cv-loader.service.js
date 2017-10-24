(function (angular) {
    'use strict';

    angular
        .module('app.common.loader')
        .factory('loaderService', loaderService);

    function loaderService() {
        var instance = {
            data: {
                done: false
            },
            isLoadingDone: isLoadingDone,
            start: start,
            done: done
        };

        function isLoadingDone() {
            return instance.data.done;
        }

        function start() {
            instance.data.done = false;
        }

        function done() {
            instance.data.done = true;
        }

        return instance;
    }

})(angular);
