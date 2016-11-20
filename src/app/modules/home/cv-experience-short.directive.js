(function (angular) {
    'use strict';

    angular
        .module('app.home')
        .directive('cvExperienceShort', cvExperienceShortDirective);

    function cvExperienceShortDirective() {
        var template = '<div class="panel panel-default">';
        template += '       <div class="panel-body">';
        template += '           <a href="{{job.companyUrl}}" target="_blank"><img src="{{job.logoUrl}}" alt="{{job.companyUrlTitle}}" class="img-rounded pull-right"></a>';
        template += '           <h4><strong>{{job.position}}</strong></h4>';
        template += '           <h4>{{job.company}}</h4>';
        template += '           <h4><small>{{job.period}}</small></h4>';
        template += '           <p>{{job.jobDescription}}</p>';
        template += '       </div>';
        template += '   </div>';

        return {
            template: template,
            scope: {
                job: '=job'
            },
            restrict: 'E'
        };
    }

})(angular);
