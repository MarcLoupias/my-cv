'use strict';

angular.module('myCvApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/experiences', {
        templateUrl: 'views/experiences.html',
        controller: 'ExperiencesCtrl'
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl'
      })
      .when('/education', {
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl'
      })
      .when('/devfolio', {
        templateUrl: 'views/devfolio.html',
        controller: 'DevfolioCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
