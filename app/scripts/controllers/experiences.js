'use strict';

angular.module('myCvApp')
    .controller('ExperiencesCtrl', function ($scope, dataService) {
        dataService.getJson().then(function (res) {
                $scope.jobs = res.data.jobs;
            }, function() {
                alert('c la fote a windoze !');
            }
        );
    });
