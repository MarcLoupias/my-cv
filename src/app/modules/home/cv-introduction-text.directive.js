(function (angular) {
    'use strict';

    angular
        .module('app.home')
        .directive('cvIntroductionText', cvIntroductionTextDirective);

    function cvIntroductionTextDirective() {
        return {
            templateUrl: 'app/modules/home/cv-introduction-text.html',
            scope: {
                data: '=data'
            },
            restrict: 'E',
            replace: true,
            controller: CvIntroductionTextController,
            controllerAs: 'introCtrl',
            bindToController: true
        };
    }

    CvIntroductionTextController.$inject = [];

    function CvIntroductionTextController() {
        angular.noop();
    }

})(angular);
