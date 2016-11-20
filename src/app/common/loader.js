(function (angular) {
    'use strict';

    angular
        .module('app.common')
        .directive('loader', loaderDirective);

    function loaderDirective() {
        return {
            template: '<div>' +
            '<img src="assets/images/loader.48x48-white.gif" alt="Loading" class="img-rounded center-block">' +
            '<h5 class="text-center">Chargement en cours ... <small>Veuillez patienter</small></h5>' +
            '</div>',
            restrict: 'E'
        };
    }

})(angular);
