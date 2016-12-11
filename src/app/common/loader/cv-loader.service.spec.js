(function (angular) {
    'use strict';

    describe('app.common.loader.loaderService', function () {
        describe('when I call loaderService.isLoadingDone()', function () {
            beforeEach(function () {
                angular.mock.module('app.common.loader');
            });

            it('should return true if loaderService.data.done equal true', angular.mock.inject(function (loaderService) {
                loaderService.data.done = true;
                expect(loaderService.isLoadingDone()).toBeTruthy();
            }));

            it('should return false if loaderService.data.done equal false', angular.mock.inject(function (loaderService) {
                loaderService.data.done = false;
                expect(loaderService.isLoadingDone()).toBeFalsy();
            }));
        });

        describe('when I call loaderService.start()', function () {
            beforeEach(function () {
                angular.mock.module('app.common.loader');
            });

            it('should set loaderService.data.done to false', angular.mock.inject(function (loaderService) {
                loaderService.start();
                expect(loaderService.data.done).toBeFalsy();
            }));
        });

        describe('when I call loaderService.done()', function () {
            beforeEach(function () {
                angular.mock.module('app.common.loader');
            });

            it('should set loaderService.data.done to true', angular.mock.inject(function (loaderService) {
                loaderService.done();
                expect(loaderService.data.done).toBeTruthy();
            }));
        });
    });

})(angular);
