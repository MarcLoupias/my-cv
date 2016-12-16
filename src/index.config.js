/* eslint-disable */
(function (angular, window) {
    'use strict';

    angular
        .module('app')
        .config(webappConfig);

    webappConfig.$inject = ['AnalyticsProvider'];

    function webappConfig(AnalyticsProvider) {
        AnalyticsProvider.setAccount('UA-48635911-1');
        AnalyticsProvider.readFromRoute(true);
        AnalyticsProvider.setDomainName('cv.marc-loupias.fr');
        if (window.location.hostname === 'localhost' && window.location.port != 9876) {
            console.log('webappConfig window.location.hostname = ', window.location.hostname);
            console.log('webappConfig window.location.port = ', window.location.port);
            AnalyticsProvider.enterDebugMode(true);
        }
    }

})(angular, window);
/* eslint-enable */
