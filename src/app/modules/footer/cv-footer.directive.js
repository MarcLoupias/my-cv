(function (angular) {
    'use strict';

    angular
        .module('app.footer')
        .directive('cvFooter', cvFooterDirective);

    function cvFooterDirective() {
        return {
            templateUrl: 'app/modules/footer/cv-footer.html',
            restrict: 'E'
        };
    }

})(angular);
