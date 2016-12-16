(function (angular) {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/modules/home/home.html',
                controller: 'MainController',
                controllerAs: 'homeCtrl',
                pageTrack: '/home'
            })
            .when('/experiences', {
                templateUrl: 'app/modules/work-experiences/work-experiences.html',
                controller: 'WorkExperiencesController',
                controllerAs: 'xpCtrl',
                pageTrack: '/experiences'
            })
            .when('/skills', {
                templateUrl: 'app/modules/skills/skills.html',
                controller: 'SkillsController',
                controllerAs: 'skillsCtrl',
                pageTrack: '/skills'
            })
            .when('/education', {
                templateUrl: 'app/modules/education/education.html',
                controller: 'EducationController',
                controllerAs: 'eduCtrl',
                pageTrack: '/education'
            })
            .when('/devfolio', {
                templateUrl: 'app/modules/dev-folio/dev-folio.html',
                controller: 'DevFolioController',
                controllerAs: 'devCtrl',
                pageTrack: '/devfolio'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }

})(angular);
