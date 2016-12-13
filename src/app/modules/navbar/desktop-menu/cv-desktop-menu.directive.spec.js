(function (angular) {
    'use strict';

    describe('app.navbar.desktopMenu.cvDesktopMenu', function () {
        describe('when i compile cv-desktop-menu directive', function () {
            var compile;
            var scope;
            var directiveElem;

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.navbar.desktopMenu');
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                    scope.title = 'burger_title';
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element('<div><cv-desktop-menu title="title"></cv-desktop-menu></div>');
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should be hidden for mobiles devices only', function () {
                var mainDivElem = angular.element(directiveElem.find('div')[0]);
                expect(mainDivElem.hasClass('hidden-xs')).toBeTruthy();
            });

            it('should set the burger menu title', function () {
                var brandElem = angular.element(directiveElem.find('a')[0]);
                expect(brandElem.text().trim()).toEqual('burger_title');
            });

            it('should set the "Expériences" menu href', function () {
                var aElem = angular.element(directiveElem.find('a')[1]);
                expect(aElem.attr('href')).toEqual('#/experiences');
            });

            it('should set the "Compétences" menu href', function () {
                var aElem = angular.element(directiveElem.find('a')[2]);
                expect(aElem.attr('href')).toEqual('#/skills');
            });

            it('should set the "Formations" menu href', function () {
                var aElem = angular.element(directiveElem.find('a')[3]);
                expect(aElem.attr('href')).toEqual('#/education');
            });

            it('should set the "Devfolio" menu href', function () {
                var aElem = angular.element(directiveElem.find('a')[4]);
                expect(aElem.attr('href')).toEqual('#/devfolio');
            });
        });
    });

})(angular);
