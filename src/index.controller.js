(function (angular) {
    'use strict';

    angular
        .module('app')
        .controller('IndexCtrl', IndexController);
    
    IndexController.$inject = ['$scope', 'dataService'];

    function IndexController($scope, dataService) {
        $scope.pending = true;

        dataService.getJson()
            .then(function (res) {
                    $scope.gnrlInfos = res.data.generalInformations;
                    $scope.pending = false;
                }, function () {
                    alert('c la fote a windoze !');
                }
            );
    }

})(angular);
