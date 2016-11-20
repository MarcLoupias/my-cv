(function (angular) {
    'use strict';

    angular
        .module('app.workExperiences')
        .controller('ExperiencesController', ExperiencesController);

    ExperiencesController.$inject = ['$scope', 'dataService'];

    function ExperiencesController($scope, dataService) {
        dataService.getJson()
            .then(function (res) {
                    $scope.jobs = res.data.jobs;
                }, function () {
                    alert('c la fote a windoze !');
                }
            );
    }

})(angular);
