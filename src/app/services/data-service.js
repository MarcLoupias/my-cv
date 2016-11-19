'use strict';

angular.module('app')
    .factory('dataService', ['$http', function ($http) {
        return {
            getJson: function () {
                return $http.get('assets/json/data.json');
            }
        };
    }]);
