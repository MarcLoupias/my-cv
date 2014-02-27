'use strict';

angular.module('myCvApp')
    .value('skillBadgeHelper', {
        getBadgeClass: function(level) {
            if(level === undefined || null) {
                return '';
            }
            return 'skill-badge-lvl-' + level;
        }
    }
);
