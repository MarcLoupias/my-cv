'use strict';

angular.module('myCvApp')
    .directive('loader', function () {
        return {
            template:
                '<div>' +
                    '<img src="../images/loader.48x48-white.gif" alt="Loading" class="img-rounded center-block">' +
                    '<h5 class="text-center">Chargement en cours ... <small>Veuillez patienter</small></h5>' +
                    '</div>',
            restrict: 'E'
        };
    });
