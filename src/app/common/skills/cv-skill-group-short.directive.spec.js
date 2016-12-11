(function (angular) {
    'use strict';

    describe('app.common.skills.cvSkillGroupShort', function () {
        describe('when i compile cv-skill-group-short directive', function () {
            var compile;
            var scope;
            var directiveElem;

            var skillGroupData = {
                name: 'Systèmes',
                skills: [
                    {name: 'Linux Debian/Ubuntu', level: 2},
                    {name: 'Windows', level: 2}
                ]
            };

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.common.skills', function ($provide) {
                    $provide.factory('cvSkillShortDirective', function () {
                        return {};
                    });
                });
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                    scope.skillGroupData = skillGroupData;
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element(
                    '<div><cv-skill-group-short skill-group="skillGroupData"></cv-skill-group-short></div>'
                );
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should set skill group name properly', function () {
                var smallElem = directiveElem.find('small');
                expect(smallElem).toBeDefined();
                expect(smallElem.text()).toEqual('Systèmes');
            });

            it('should have <h4> title tag', function () {
                var h4Elem = directiveElem.find('h4');
                expect(h4Elem).toBeDefined();
            });
        });
    });

})(angular);
