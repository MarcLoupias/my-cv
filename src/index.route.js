(function () {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/main.html',
                controller: 'MainCtrl'
            })
            .when('/experiences', {
                templateUrl: 'app/views/experiences.html',
                controller: 'ExperiencesCtrl'
            })
            .when('/skills', {
                templateUrl: 'app/views/skills.html',
                controller: 'SkillsCtrl'
            })
            .when('/education', {
                templateUrl: 'app/views/education.html',
                controller: 'EducationCtrl'
            })
            .when('/devfolio', {
                templateUrl: 'app/views/devfolio.html',
                controller: 'DevfolioCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
