(function (angular) {
    'use strict';

    angular
        .module('app.workExperiences')
        .controller('ExperiencesCtrl', ['$scope', 'dataService', function ($scope, dataService) {

            dataService.getJson()
                .then(function (res) {
                    $scope.jobs = res.data.jobs;
                }, function () {
                    alert('c la fote a windoze !');
                }
            );
        }]);

})(angular);
