(function (angular) {
    'use strict';

    angular
        .module('app.common.loader')
        .directive('cvLoader', cvLoaderDirective);

    function cvLoaderDirective() {
        return {
            templateUrl: 'app/common/loader/cv-loader.html',
            restrict: 'E'
        };
    }

})(angular);
