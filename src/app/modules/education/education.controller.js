(function (angular) {
    'use strict';

    angular
        .module('app.education')
        .controller('EducationController', EducationController);

    EducationController.$inject = ['$scope', 'dataService'];

    function EducationController($scope, dataService) {
        dataService.getJson()
            .then(function (res) {
                    $scope.degrees = res.data.degrees;
                }, function () {
                    alert('c la fote a windoze !');
                }
            );
    }

})(angular);
