(function (angular) {
    'use strict';

    angular
        .module('app.common')
        .factory('dataService', dataService);

    dataService.$inject = ['$http', '$q', '$log'];

    function dataService($http, $q, $log) {
        var instance = {
            data: {
                gnrlInfos: {},
                jobs: null,
                skillCategories: null,
                degrees: null,
                devfolio: null
            },
            init: init,
            getJson: getJson
        };

        return instance;

        function init() {
            var deferred = $q.defer();

            instance.getJson()
                .then(function getJsonSuccess(res) {
                    $log.debug('app.common.dataService.init().getJsonSuccess() res = ', res);
                    instance.data.gnrlInfos = res.data.generalInformations;
                    instance.data.jobs = res.data.jobs;
                    instance.data.skillCategories = res.data.skillCategories;
                    instance.data.degrees = res.data.degrees;
                    instance.data.devfolio = res.data.devfolio;

                    $log.debug('app.common.dataService.init().getJsonSuccess() instance.data = ', instance.data);
                    deferred.resolve(instance.data);
                })
                .catch(function getJsonError(e) {
                    $log.debug('app.common.dataService.init().getJsonError() e = ', e);
                    deferred.reject(e);
                })
                .finally(function getJsonFinally() {
                    $log.debug('app.common.dataService.init()', '.getJsonFinally()');
                });

            return deferred.promise;
        }

        function getJson() {
            $log.debug('app.common.dataService', 'getJson() from assets/json/data.json');
            return $http.get('assets/json/data.json');
        }
    }

})(angular);
