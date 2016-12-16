(function (angular) {
    'use strict';

    angular
        .module('app', [
            'ngSanitize', 'ngRoute', 'ui.bootstrap', 'angular-google-analytics',

            'app.common',

            'app.navbar', 'app.footer',

            'app.home', 'app.devFolio', 'app.skills', 'app.workExperiences', 'app.education'
        ]);

})(angular);
