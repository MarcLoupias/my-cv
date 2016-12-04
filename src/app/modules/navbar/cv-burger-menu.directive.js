(function (angular) {
    'use strict';

    angular
        .module('app.navbar')
        .directive('cvBurgerMenu', cvBurgerMenuDirective);

    function cvBurgerMenuDirective() {
        return {
            templateUrl: 'app/modules/navbar/cv-burger-menu.html',
            restrict: 'E'
        };
    }

})(angular);
