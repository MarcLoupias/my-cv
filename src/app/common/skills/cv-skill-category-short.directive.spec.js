(function (angular) {
    'use strict';

    describe('app.common.skills.cvSkillCategoryShort', function () {
        describe('when i compile cv-skill-category-short directive', function () {
            var compile;
            var scope;
            var directiveElem;

            var skillCategoryData = {
                name: 'Environnements',
                skillGroups: [
                    {name: 'Systèmes'},
                    {name: 'Langages'}
                ]
            };

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.common.skills', function ($provide) {
                    $provide.factory('cvSkillGroupShortDirective', function () {
                        return {};
                    });
                });
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                    scope.skillCategoryData = skillCategoryData;
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element(
                    '<div><cv-skill-category-short skill-category="skillCategoryData"></cv-skill-category-short></div>'
                );
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should set skill category name properly', function () {
                var strongElem = directiveElem.find('strong');
                expect(strongElem).toBeDefined();
                expect(strongElem.text()).toEqual('Environnements');
            });

            it('should should set skill category name block with img glyphicons-213-arrow-down.png', function () {
                var imgElem = directiveElem.find('img');
                expect(imgElem).toBeDefined();
                expect(imgElem.attr('src')).toEqual('assets/images/icons/glyphicons-213-arrow-down.png');
            });
        });
    });

})(angular);
