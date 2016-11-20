(function (angular) {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/modules/home/home.html',
                controller: 'MainController',
                controllerAs: 'homeCtrl'
            })
            .when('/experiences', {
                templateUrl: 'app/modules/work-experiences/work-experiences.html',
                controller: 'WorkExperiencesController',
                controllerAs: 'xpCtrl'
            })
            .when('/skills', {
                templateUrl: 'app/modules/skills/skills.html',
                controller: 'SkillsController',
                controllerAs: 'skillsCtrl'
            })
            .when('/education', {
                templateUrl: 'app/modules/education/education.html',
                controller: 'EducationController',
                controllerAs: 'eduCtrl'
            })
            .when('/devfolio', {
                templateUrl: 'app/modules/dev-folio/dev-folio.html',
                controller: 'DevFolioController',
                controllerAs: 'devCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})(angular);
