'use strict';

angular.module('app')
    .controller('EducationCtrl', ['$scope', 'dataService', function ($scope, dataService) {

        dataService.getJson().then(function (res) {
                $scope.degrees = res.data.degrees;
            }, function() {
                alert('c la fote a windoze !');
            }
        );
    }]);
