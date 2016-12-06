(function (angular) {
    'use strict';

    angular
        .module('app.home')
        .directive('cvContact', cvContactDirective);

    function cvContactDirective() {
        return {
            templateUrl: 'app/modules/home/cv-contact.html',
            scope: {
                data: '=data'
            },
            restrict: 'E',
            replace: true,
            controller: CvContactController,
            controllerAs: 'contactCtrl',
            bindToController: true
        };
    }

    CvContactController.$inject = [];

    function CvContactController() {
        angular.noop();
    }

})(angular);
