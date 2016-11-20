(function (angular) {
    'use strict';

    angular
        .module('app.devFolio')
        .directive('devFolioProject', devFolioProjectDirective);

    function devFolioProjectDirective() {
        var template = '<div>';
        template += '<div class="panel panel-default"><div class="panel-body">';
        template += '   <p><strong>{{project.name}}</strong>';
        template += '   <span class="pull-right">';
        template += '       <a href="{{project.deployedProjectUrl}}" title="{{project.deployedProjectUrlTitle}}" target="_blank">';
        template += '           <i class="icon-large icon-link"></i></a>';
        template += '       <a ng-repeat="repo in project.githubRepoList" href="{{repo.repoUrl}}" title="{{repo.repoUrlTitle}}" target="_blank">';
        template += '           <i class="icon-large icon-github"></i></a>';
        template += '   </span>';

        template += '   <div class="well"><p ng-repeat="text in project.description">{{text.p}}</p></div>';

        template += '   <h4><small>Technologies</small></h4><p><span ng-repeat="t in project.technos">{{t.name}} </span></p>';
        template += '   <h4><small>Langages</small></h4><p><span ng-repeat="l in project.languages">{{l.name}} </span></p>';
        template += '   <h4><small>Environnement</small></h4><p><span ng-repeat="e in project.environment">{{e.name}} </span></p>';

        template += '</div></div>';
        template += '</div>';

        return {
            template: template,
            restrict: 'E',
            scope: {
                project: '=project'
            },
            controller: ['$scope', function ($scope) {

            }]
        };
    }

})(angular);
