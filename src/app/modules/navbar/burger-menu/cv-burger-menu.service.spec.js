(function (angular) {
    'use strict';

    describe('app.navbar.burgerMenu.burgerMenuService', function () {
        describe('when I call burgerMenuService.isCollapsed()', function () {
            beforeEach(function () {
                angular.mock.module('app.navbar.burgerMenu');
            });

            it('should return true if burgerMenuService.data.collapsed equal true', angular.mock.inject(function (burgerMenuService) {
                burgerMenuService.data.collapsed = true;
                expect(burgerMenuService.isCollapsed()).toBeTruthy();
            }));

            it('should return false if burgerMenuService.data.collapsed equal false', angular.mock.inject(function (burgerMenuService) {
                burgerMenuService.data.collapsed = false;
                expect(burgerMenuService.isCollapsed()).toBeFalsy();
            }));
        });

        describe('when I call burgerMenuService.toggle()', function () {
            beforeEach(function () {
                angular.mock.module('app.navbar.burgerMenu');
            });

            it('should set burgerMenuService.data.collapsed to false', angular.mock.inject(function (burgerMenuService) {
                burgerMenuService.toggle();
                expect(burgerMenuService.data.collapsed).toBeFalsy();
            }));
        });

        describe('when I call burgerMenuService.collapse()', function () {
            beforeEach(function () {
                angular.mock.module('app.navbar.burgerMenu');
            });

            it('should set burgerMenuService.data.collapsed to true', angular.mock.inject(function (burgerMenuService) {
                burgerMenuService.collapse();
                expect(burgerMenuService.data.collapsed).toBeTruthy();
            }));
        });
    });

})(angular);
