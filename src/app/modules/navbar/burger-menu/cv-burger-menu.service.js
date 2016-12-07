(function (angular) {
    'use strict';

    angular
        .module('app.navbar.burgerMenu')
        .factory('burgerMenuService', burgerMenuService);

    function burgerMenuService() {
        var instance = {
            data: {
                collapsed: true
            },
            isCollapsed: isCollapsed,
            toggle: toggle,
            collapse: collapse
        };

        return instance;

        function isCollapsed() {
            return instance.data.collapsed;
        }

        function toggle() {
            instance.data.collapsed = !instance.data.collapsed;
        }

        function collapse() {
            instance.data.collapsed = true;
        }
    }

})(angular);
