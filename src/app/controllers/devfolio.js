'use strict';

angular.module('app')
    .controller('DevfolioCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        dataService.getJson().then(function (res) {
                $scope.devfolio = res.data.devfolio;
            }, function() {
                alert('c la fote a windoze !');
            }
        );
    }]);
