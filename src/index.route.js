(function (angular) {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/modules/home/home.html',
                controller: 'MainController'
            })
            .when('/experiences', {
                templateUrl: 'app/modules/work-experiences/work-experiences.html',
                controller: 'ExperiencesController'
            })
            .when('/skills', {
                templateUrl: 'app/modules/skills/skills.html',
                controller: 'SkillsController'
            })
            .when('/education', {
                templateUrl: 'app/modules/education/education.html',
                controller: 'EducationController'
            })
            .when('/devfolio', {
                templateUrl: 'app/modules/dev-folio/dev-folio.html',
                controller: 'DevFolioController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})(angular);
