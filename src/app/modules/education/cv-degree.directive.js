(function (angular) {
    'use strict';

    angular
        .module('app.education')
        .directive('cvDegree', cvDegreeDirective);

    function cvDegreeDirective() {
        return {
            templateUrl: 'app/modules/education/cv-degree.html',
            scope: {
                degree: '=degree'
            },
            restrict: 'E'
        };
    }

})(angular);
