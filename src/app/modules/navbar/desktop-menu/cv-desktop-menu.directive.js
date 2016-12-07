(function (angular) {
    'use strict';

    angular
        .module('app.navbar.desktopMenu')
        .directive('cvDesktopMenu', cvDesktopMenuDirective);

    function cvDesktopMenuDirective() {
        return {
            templateUrl: 'app/modules/navbar/desktop-menu/cv-desktop-menu.html',
            scope: {
                title: '=title'
            },
            restrict: 'E',
            replace: true,
            controller: CvDesktopMenuController,
            controllerAs: 'desktopCtrl',
            bindToController: true
        };
    }

    CvDesktopMenuController.$inject = ['$log'];

    function CvDesktopMenuController($log) {
        $log.debug('app.navbar.desktopMenu.cvDesktopMenuDirective', 'CvDesktopMenuController start');
    }

})(angular);
