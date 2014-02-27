'use strict';

angular.module('myCvApp')
    .directive('experienceShort', function () {

        var template = '<div class="panel panel-default">';
        template += '       <div class="panel-body">';
        template += '           <h4><strong>{{job.position}}</strong></h4>';
        template += '           <h4>{{job.company}} <small>{{job.period}}</small>';
        template += '               <a href="{{job.companyUrl}}" title="{{job.companyUrlTitle}}" target="_blank">';
        template += '                   <i class="icon-large icon-link"></i></a>';
        template += '           </h4>';
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
    });
