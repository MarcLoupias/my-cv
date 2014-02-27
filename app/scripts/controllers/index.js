'use strict';

angular.module('myCvApp')
    .controller('IndexCtrl', function ($scope, dataService) {
        dataService.getJson().then(function (res) {
                $scope.gnrlInfos = res.data.generalInformations;

            }, function() {
                alert('c la fote a windoze !');
            }
        );
    });
