(function (angular) {
    'use strict';

    angular
        .module('app.common')
        .factory('dataService', ['$http', function ($http) {
            return {
                getJson: function () {
                    return $http.get('assets/json/data.json');
                }
            };
        }]);

})(angular);
