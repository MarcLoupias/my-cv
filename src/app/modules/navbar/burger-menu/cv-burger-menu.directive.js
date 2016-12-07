(function (angular) {
    'use strict';

    angular
        .module('app.navbar.burgerMenu')
        .directive('cvBurgerMenu', cvBurgerMenuDirective);

    function cvBurgerMenuDirective() {
        return {
            templateUrl: 'app/modules/navbar/burger-menu/cv-burger-menu.html',
            scope: {
                title: '=title'
            },
            restrict: 'E',
            replace: true,
            controller: CvBurgerMenuController,
            controllerAs: 'burgerCtrl',
            bindToController: true
        };
    }

    CvBurgerMenuController.$inject = ['$log', 'burgerMenuService'];

    function CvBurgerMenuController($log, burgerMenuService) {
        $log.debug('app.navbar.burgerMenu.cvBurgerMenuDirective', 'CvBurgerMenuController start');
        var vm = this;

        init();

        function init() {
            vm.burgerMenuService = burgerMenuService;
        }
    }

})(angular);
