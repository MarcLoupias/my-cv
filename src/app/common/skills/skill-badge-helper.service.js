(function (angular) {
    'use strict';

    angular
        .module('app.common.skills')
        .factory('skillBadgeHelper', skillBadgeHelperService);

    function skillBadgeHelperService() {
        return {
            getBadgeClass: getBadgeClass,
            getBadgeTitle: getBadgeTitle,
            getBadgeText: getBadgeText
        };

        function getBadgeClass(level) {
            if (!level) {
                return '';
            }
            return 'skill-badge-lvl-' + level;
        }

        function getBadgeTitle(level) {
            if (!level) {
                return '';
            }

            switch (level) {
                case 1: {
                    return 'Débutant';
                }
                case 2: {
                    return 'Initié';
                }
                case 3: {
                    return 'Confirmé';
                }
                case 4: {
                    return 'Expert';
                }
                default: {
                    return '';
                }
            }
        }

        function getBadgeText(level) {
            if (!level) {
                return '';
            }

            switch (level) {
                case 1: {
                    return 'Je passe plus de temps dans la documentation que dans le code.';
                }
                case 2: {
                    return 'Je passe plus de temps dans le code que dans la documentation.';
                }
                case 3: {
                    return 'Je ne consulte la documentation que pour des points très précis et peu usuels.';
                }
                case 4: {
                    return 'Des passages de mes livres sont cités sur les forums et les mailing lists ;-)';
                }
                default: {
                    return '';
                }
            }
        }
    }

})(angular);
