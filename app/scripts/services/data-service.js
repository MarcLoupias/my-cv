'use strict';

angular.module('myCvApp')
    .factory('dataService', ['$http', function ($http) {
        return {
            getJson: function () {
                return $http.get('data.json');
            }
        };
    }]);
