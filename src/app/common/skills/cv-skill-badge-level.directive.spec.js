(function (angular) {
    'use strict';

    describe('app.common.skills.cvSkillBadgeLevel', function () {
        describe('when i compile cv-skill-badge-level directive', function () {
            var compile;
            var scope;
            var directiveElem;

            function skillBadgeHelperFactoryMock() {
                return {
                    getBadgeClass: function () {
                        return 'badge_class';
                    },
                    getBadgeTitle: function () {
                        return 'badge_title';
                    },
                    getBadgeText: function () {
                        return 'badge_text';
                    }
                };
            }

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.common.skills', function ($provide) {
                    $provide.factory('skillBadgeHelper', skillBadgeHelperFactoryMock);
                });
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element('<div><cv-skill-badge-level level="1"></cv-skill-badge-level></div>');
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should have proper value for level parameter', function () {
                var spanElem = directiveElem.find('span');
                expect(spanElem.attr('level')).toEqual('1');
            });

            it('should set proper value from badgeLevelCtrl.level to the directive DOM', function () {
                var spanElem = directiveElem.find('span');
                expect(spanElem.text()).toEqual('\n    1\n');
            });

            it('should add badge class', function () {
                var spanElem = directiveElem.find('span');
                expect(spanElem.hasClass('badge_class')).toBeTruthy();
            });

            it('should set proper value to uib-popover directive', function () {
                var spanElem = directiveElem.find('span');
                expect(spanElem.attr('uib-popover')).toEqual('badge_text');
            });

            it('should set proper value to popover-title attr from uib-popover directive', function () {
                var spanElem = directiveElem.find('span');
                expect(spanElem.attr('popover-title')).toEqual('badge_title');
            });
        });
    });

})(angular);
