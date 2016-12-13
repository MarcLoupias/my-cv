(function (angular) {
    'use strict';

    describe('app.navbar.cvNavbar', function () {
        describe('when i compile cv-navbar directive', function () {
            var compile;
            var scope;
            var directiveElem;

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.navbar.burgerMenu', function ($provide) {
                    $provide.factory('cvBurgerMenuDirective', function () {
                        return {};
                    });
                });
                angular.mock.module('app.navbar.desktopMenu', function ($provide) {
                    $provide.factory('cvDesktopMenuDirective', function () {
                        return {};
                    });
                });
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element('<div><cv-navbar></cv-navbar></div>');
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should call <cv-burger-menu> with title binding', function () {
                var burgerMenuElement = directiveElem.find('cv-burger-menu');
                expect(burgerMenuElement.attr('title')).toEqual('indexCtrl.gnrlInfos.cvTitle');
            });

            it('should call <cv-desktop-menu> with title binding', function () {
                var desktopMenuElement = directiveElem.find('cv-desktop-menu');
                expect(desktopMenuElement.attr('title')).toEqual('indexCtrl.gnrlInfos.cvTitle');
            });
        });
    });

})(angular);
