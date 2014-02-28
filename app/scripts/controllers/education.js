'use strict';

angular.module('myCvApp')
    .controller('EducationCtrl', ['$scope', 'dataService', function ($scope, dataService) {

        dataService.getJson().then(function (res) {
                $scope.degrees = res.data.degrees;
            }, function() {
                alert('c la fote a windoze !');
            }
        );
    }]);
