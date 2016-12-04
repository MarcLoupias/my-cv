(function (angular) {
    'use strict';

    angular
        .module('app.home')
        .directive('cvPersonalData', cvPersonalDataDirective);

    function cvPersonalDataDirective() {
        return {
            templateUrl: 'app/modules/home/cv-personal-data.html',
            scope: {
                data: '=data'
            },
            restrict: 'E',
            replace: true,
            controller: CvPersonalDataController,
            controllerAs: 'persoDataCtrl',
            bindToController: true
        };
    }

    CvPersonalDataController.$inject = [];

    function CvPersonalDataController() {
        angular.noop();
    }

})(angular);
