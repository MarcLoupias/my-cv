(function (angular) {
    'use strict';

    angular
        .module('app.devFolio')
        .directive('cvDevFolioProject', cvDevFolioProjectDirective);

    function cvDevFolioProjectDirective() {
        return {
            templateUrl: 'app/modules/dev-folio/cv-dev-folio-project.html',
            restrict: 'E',
            scope: {
                project: '=project'
            }
        };
    }

})(angular);
