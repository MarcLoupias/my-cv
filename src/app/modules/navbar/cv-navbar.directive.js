(function (angular) {
    'use strict';

    angular
        .module('app.navbar')
        .directive('cvNavbar', cvNavbarDirective);

    function cvNavbarDirective() {
        return {
            templateUrl: 'app/modules/navbar/cv-navbar.html',
            restrict: 'E'
        };
    }

})(angular);
