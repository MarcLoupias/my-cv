(function (angular) {
    'use strict';

    angular
        .module('app.workExperiences')
        .directive('cvExperienceFull', cvExperienceFullDirective);

    function cvExperienceFullDirective() {
        return {
            templateUrl: 'app/modules/work-experiences/cv-experience-full.html',
            scope: {
                job: '=job'
            },
            restrict: 'E'
        };
    }

})(angular);
