(function (angular) {
    'use strict';

    angular
        .module('app.navbar')
        .directive('cvDesktopMenu', cvDesktopMenuDirective);

    function cvDesktopMenuDirective() {
        return {
            templateUrl: 'app/modules/navbar/cv-desktop-menu.html',
            restrict: 'E'
        };
    }

})(angular);
