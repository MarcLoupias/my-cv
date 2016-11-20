(function (angular) {
    'use strict';

    angular
        .module('app.home')
        .directive('cvExperienceShort', cvExperienceShortDirective);

    function cvExperienceShortDirective() {
        return {
            templateUrl: 'app/modules/home/cv-experience-short.html',
            scope: {
                job: '=job'
            },
            restrict: 'E'
        };
    }

})(angular);
