(function (angular) {
    'use strict';

    describe('app.common.loader.loaderService', function () {
        describe('when I call loaderService.isLoadingDone()', function () {
            var loaderService;

            beforeEach(function () {
                angular.mock.module('app.common.loader');
                angular.mock.inject(injectLoaderService);

                function injectLoaderService(_loaderService_) {
                    loaderService = _loaderService_;
                    expect(typeof loaderService).toEqual('object');
                }
            });

            it('should return true if loaderService.data.done equal true', function () {
                loaderService.data.done = true;
                expect(loaderService.isLoadingDone()).toBeTruthy();
            });

            it('should return false if loaderService.data.done equal false', function () {
                loaderService.data.done = false;
                expect(loaderService.isLoadingDone()).toBeFalsy();
            });
        });

        describe('when I call loaderService.start()', function () {
            var loaderService;

            beforeEach(function () {
                angular.mock.module('app.common.loader');
                angular.mock.inject(injectLoaderService);

                function injectLoaderService(_loaderService_) {
                    loaderService = _loaderService_;
                    expect(typeof loaderService).toEqual('object');
                }
            });

            it('should set loaderService.data.done to false', function () {
                loaderService.start();
                expect(loaderService.data.done).toBeFalsy();
            });
        });

        describe('when I call loaderService.done()', function () {
            var loaderService;

            beforeEach(function () {
                angular.mock.module('app.common.loader');
                angular.mock.inject(injectLoaderService);

                function injectLoaderService(_loaderService_) {
                    loaderService = _loaderService_;
                    expect(typeof loaderService).toEqual('object');
                }
            });

            it('should set loaderService.data.done to true', function () {
                loaderService.done();
                expect(loaderService.data.done).toBeTruthy();
            });
        });
    });

})(angular);
