(function (angular) {
    'use strict';

    angular
        .module('app.common')
        .directive('cvLoader', cvLoaderDirective);

    function cvLoaderDirective() {
        return {
            templateUrl: 'app/common/cv-loader.html',
            restrict: 'E'
        };
    }

})(angular);
