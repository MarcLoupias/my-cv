'use strict';

angular.module('myCvApp')
    .directive('degree', function () {
        var template = '<div class="panel panel-default">';
        template += '       <div class="panel-body">';
        template += '           <h4><strong>{{degree.name}}</strong></h4>';
        template += '           <h4>{{degree.school}} <small>{{degree.period}}</small>';
        template += '               <a ng-if="(degree.schoolUrl != undefined)" href="{{degree.schoolUrl}}" title="{{degree.schoolUrlTitle}}" target="_blank">';
        template += '                   <i class="icon-large icon-link"></i></a>';
        template += '           </h4>';
        template += '           <ul>';
        template += '               <li ng-repeat="skill in degree.degreeDescription">{{skill.desc}}</li>';
        template += '           </ul>';
        template += '       </div>';
        template += '   </div>';

        return {
            template: template,
            scope: {
                degree: '=degree'
            },
            restrict: 'E'
        };
    });
