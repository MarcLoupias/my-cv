(function (angular) {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/modules/home/home.html',
                controller: 'MainCtrl'
            })
            .when('/experiences', {
                templateUrl: 'app/modules/work-experiences/work-experiences.html',
                controller: 'ExperiencesCtrl'
            })
            .when('/skills', {
                templateUrl: 'app/modules/skills/skills.html',
                controller: 'SkillsCtrl'
            })
            .when('/education', {
                templateUrl: 'app/modules/education/education.html',
                controller: 'EducationCtrl'
            })
            .when('/devfolio', {
                templateUrl: 'app/modules/dev-folio/dev-folio.html',
                controller: 'DevfolioCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})(angular);
