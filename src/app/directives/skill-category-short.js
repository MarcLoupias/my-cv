'use strict';

angular.module('app')
    .directive('skillCategoryShort', function () {

        var template = '<div class="panel panel-default">';
        template += '       <div class="panel-body">';
        template += '           <p><i class="glyphicon glyphicon-arrow-down"></i><strong>{{skillCategory.name}}</strong></p>';
        template += '           <skill-group-short ng-repeat="skillGroup in skillCategory.skillGroups" skill-group="skillGroup"></skill-group-short>';
        template += '       </div>';
        template += '   </div>';

        return {
            template: template,
            restrict: 'E',
            scope: {
                skillCategory:'=skillCategory'
            }
        };
    });
