(function (angular) {
    'use strict';

    angular
        .module('app.common')
        .factory('dataService', dataService);

    dataService.$inject = ['$http'];

    function dataService ($http) {
        return {
            getJson: function () {
                return $http.get('assets/json/data.json');
            }
        };
    }

})(angular);
