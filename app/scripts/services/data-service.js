'use strict';

angular.module('myCvApp')
    .factory('dataService', function ($http) {
        return {
            getJson: function () {
                return $http.get('data.json');
            }
        };
    });
