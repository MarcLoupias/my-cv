(function (angular) {
    'use strict';

    describe('app.common.skills.cvSkillShort', function () {

        /*
         * 2 cases of configuration for this directive.
         *
         * A simple form with only name and level :
         *  {
         *      name: 'Bash',
         *      level: 1
         *  }
         *
         *  or a full skill with skill url and skill url title :
         *
         *  {
         *      name: 'Plateforme Heroku',
         *      level: 2,
         *      skillUrl: 'https://www.heroku.com/',
         *      skillUrlTitle: 'www.heroku.com'
         *  }
         *
         */

        describe('when i compile cv-skill-short directive without any link defined', function () {
            var compile;
            var scope;
            var directiveElem;

            var skillData = {
                name: 'Systèmes',
                level: 2
            };

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.common.skills', function ($provide) {
                    $provide.factory('cvSkillBadgeLevelDirective', function () {
                        return {};
                    });
                });
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                    scope.skillData = skillData;
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element('<div><cv-skill-short skill="skillData"></cv-skill-short></div>');
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should set skill name properly', function () {
                var spanElement = directiveElem.find('span');
                expect(spanElement).toBeDefined();
                expect(spanElement.text()).toEqual('Systèmes');
            });

            it('should not setup a link element', function () {
                var aElem = directiveElem.find('a');
                expect(aElem.length).toEqual(0);
            });
        });

        describe('when i compile cv-skill-short directive with a link defined', function () {
            var compile;
            var scope;
            var directiveElem;

            var skillData = {
                name: 'Plateforme Heroku',
                level: 2,
                skillUrl: 'https://www.heroku.com/',
                skillUrlTitle: 'www.heroku.com'
            };

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.common.skills', function ($provide) {
                    $provide.factory('cvSkillBadgeLevelDirective', function () {
                        return {};
                    });
                });
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                    scope.skillData = skillData;
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element('<div><cv-skill-short skill="skillData"></cv-skill-short></div>');
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should set skill name properly', function () {
                var spanElement = directiveElem.find('span');
                expect(spanElement).toBeDefined();
                expect(spanElement.text()).toEqual('Plateforme Heroku');
            });

            it('should setup a link element', function () {
                var aElem = directiveElem.find('a');
                expect(aElem.length).toEqual(1);
            });

            it('should setup a link element with href equal to skillUrl', function () {
                var aElem = directiveElem.find('a');
                expect(aElem.length).toEqual(1);
                expect(aElem.attr('href')).toEqual('https://www.heroku.com/');
            });

            it('should setup a link element with title equal to skillUrlTitle', function () {
                var aElem = directiveElem.find('a');
                expect(aElem.length).toEqual(1);
                expect(aElem.attr('title')).toEqual('www.heroku.com');
            });
        });
    });

})(angular);

