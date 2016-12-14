(function (angular) {
    'use strict';

    describe('app.navbar.burgerMenu.cvBurgerMenu', function () {
        describe('when i compile cv-burger-menu directive', function () {
            var compile;
            var scope;
            var directiveElem;

            function burgerMenuServiceMock() {
                return {
                    isCollapsed: function () {
                        return false;
                    },
                    toggle: function () {
                        angular.noop();
                    },
                    collapse: function () {
                        angular.noop();
                    }
                };
            }

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.navbar.burgerMenu', function ($provide) {
                    $provide.factory('burgerMenuService', burgerMenuServiceMock);
                });
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                    scope.title = 'burger_title';
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element('<div><cv-burger-menu title="title"></cv-burger-menu></div>');
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should be visible for mobiles devices only', function () {
                var mainDivElem = angular.element(directiveElem.find('div')[0]);
                expect(mainDivElem.hasClass('visible-xs')).toBeTruthy();
            });

            it('should set the burger menu title', function () {
                var brandElem = angular.element(directiveElem.find('a')[0]);
                expect(brandElem.text().trim()).toEqual('burger_title');
            });

            it('should set the brand ng-click event', function () {
                var brandElem = angular.element(directiveElem.find('a')[0]);
                expect(brandElem.attr('ng-click')).toEqual('burgerCtrl.burgerMenuService.collapse()');
            });

            it('should set the toggle button ng-click event', function () {
                var buttonElem = directiveElem.find('button');
                expect(buttonElem.attr('ng-click')).toEqual('burgerCtrl.burgerMenuService.toggle()');
            });

            it('should set uib-collapse directive criteria', function () {
                var uibCollapseDivElem = angular.element(directiveElem.find('div')[2]);
                expect(uibCollapseDivElem.attr('uib-collapse')).toEqual('burgerCtrl.burgerMenuService.isCollapsed()');
            });

            it('should set the "Expériences" menu ng-click event', function () {
                var aElem = angular.element(directiveElem.find('a')[1]);
                expect(aElem.attr('ng-click')).toEqual('burgerCtrl.burgerMenuService.collapse()');
            });

            it('should set the "Expériences" menu href', function () {
                var aElem = angular.element(directiveElem.find('a')[1]);
                expect(aElem.attr('href')).toEqual('#!/experiences');
            });

            it('should set the "Compétences" menu ng-click event', function () {
                var aElem = angular.element(directiveElem.find('a')[2]);
                expect(aElem.attr('ng-click')).toEqual('burgerCtrl.burgerMenuService.collapse()');
            });

            it('should set the "Compétences" menu href', function () {
                var aElem = angular.element(directiveElem.find('a')[2]);
                expect(aElem.attr('href')).toEqual('#!/skills');
            });

            it('should set the "Formations" menu ng-click event', function () {
                var aElem = angular.element(directiveElem.find('a')[3]);
                expect(aElem.attr('ng-click')).toEqual('burgerCtrl.burgerMenuService.collapse()');
            });

            it('should set the "Formations" menu href', function () {
                var aElem = angular.element(directiveElem.find('a')[3]);
                expect(aElem.attr('href')).toEqual('#!/education');
            });

            it('should set the "Devfolio" menu ng-click event', function () {
                var aElem = angular.element(directiveElem.find('a')[4]);
                expect(aElem.attr('ng-click')).toEqual('burgerCtrl.burgerMenuService.collapse()');
            });

            it('should set the "Devfolio" menu href', function () {
                var aElem = angular.element(directiveElem.find('a')[4]);
                expect(aElem.attr('href')).toEqual('#!/devfolio');
            });
        });
    });

})(angular);
