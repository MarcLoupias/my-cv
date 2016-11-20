(function (angular) {
    'use strict';

    angular
        .module('app.workExperiences')
        .directive('experienceFull', function () {

            var template = '<div class="panel panel-default">';
            template += '       <div class="panel-body">';
            template += '           <a href="{{job.companyUrl}}" target="_blank"><img src="{{job.logoUrl}}" alt="{{job.companyUrlTitle}}" class="img-rounded pull-right"></a>';
            template += '           <h4><strong>{{job.position}}</strong></h4>';
            template += '           <h4>{{job.company}}</h4>';
            template += '           <h4><small>{{job.period}}</small></h4>';
            template += '           <p>{{job.jobDescription}}</p>';
            template += '           <ul>';
            template += '               <li ng-repeat="task in job.tasks">{{task.desc}}</li>';
            template += '           </ul>';
            template += '       </div>';
            template += '   </div>';

            return {
                template: template,
                scope: {
                    job: '=job'
                },
                restrict: 'E'
            };
        });

})(angular);
