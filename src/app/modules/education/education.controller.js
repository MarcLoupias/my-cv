(function (angular) {
    'use strict';

    angular
        .module('app.education')
        .controller('EducationController', EducationController);

    EducationController.$inject = ['dataService', '$log'];

    function EducationController(dataService, $log) {
        var vm = this;

        init();

        function init() {
            $log.debug('app.education.EducationController.init()', 'start');
            vm.degrees = dataService.data.degrees;
            $log.debug('app.education.EducationController.init()', 'end');
        }
    }

})(angular);
