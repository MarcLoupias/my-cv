'use strict';

angular.module('myCvApp')
    .controller('IndexCtrl', ['$scope', 'dataService', function ($scope, dataService) {

        $scope.pending = true;

        dataService.getJson().then(function (res) {
                $scope.gnrlInfos = res.data.generalInformations;
                $scope.pending = false;
            }, function() {
                alert('c la fote a windoze !');
            }
        );
    }]);
