(function (angular) {
    'use strict';

    angular
        .module('app.devFolio')
        .controller('DevFolioController', DevFolioController);

    DevFolioController.$inject = ['$scope', 'dataService'];

    function DevFolioController($scope, dataService) {
        dataService.getJson()
            .then(function (res) {
                    $scope.devfolio = res.data.devfolio;
                }, function () {
                    alert('c la fote a windoze !');
                }
            );
    }

})(angular);
