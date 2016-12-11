(function (angular) {
    'use strict';

    describe('app.IndexController', function () {
        describe('when i start IndexController', function () {
            var controller;
            var q;
            var rootScope;
            var log;

            var loaderService = {
                done: function () {
                    angular.noop();
                }
            };

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.common');
                angular.mock.module('app.common.loader');
            });

            beforeEach(function () {
                angular.mock.inject(injectDep);

                function injectDep($controller, $q, $rootScope, _$log_) {
                    controller = $controller;
                    q = $q;
                    rootScope = $rootScope;
                    log = _$log_;

                    spyOn(log, 'debug');
                }
            });

            it('should init data when dataService resolve is success', function () {
                var dataService = {
                    data: {
                        gnrlInfos: {
                            toto: 'toto',
                            bibi: 'bibi'
                        }
                    },
                    init: function () {
                        angular.noop();
                    }
                };

                spyOn(loaderService, 'done');
                spyOn(dataService, 'init').and.returnValue(q.when({}));

                var IndexController = controller('IndexController', {
                    dataService: dataService,
                    $log: log,
                    loaderService: loaderService
                });

                expect(IndexController.gnrlInfos).toBeUndefined();

                rootScope.$digest();

                expect(IndexController.isBurgerCollapsed).toBeTruthy();
                expect(IndexController.loader).toEqual(loaderService);
                expect(IndexController.gnrlInfos).toEqual(dataService.data.gnrlInfos);

                expect(dataService.init).toHaveBeenCalled();
                expect(log.debug).toHaveBeenCalled();
                expect(loaderService.done).toHaveBeenCalled();
            });

            it('should not init data when dataService resolve is error', function () {
                var dataService = {
                    data: {
                        gnrlInfos: {}
                    },
                    init: function () {
                        angular.noop();
                    }
                };

                spyOn(loaderService, 'done');
                spyOn(dataService, 'init').and.returnValue(q.reject('error'));

                var IndexController = controller('IndexController', {
                    dataService: dataService,
                    $log: log,
                    loaderService: loaderService
                });

                expect(IndexController.gnrlInfos).toBeUndefined();

                rootScope.$digest();

                expect(IndexController.isBurgerCollapsed).toBeTruthy();
                expect(IndexController.loader).toEqual(loaderService);
                expect(IndexController.gnrlInfos).toBeUndefined();

                expect(dataService.init).toHaveBeenCalled();
                expect(log.debug).toHaveBeenCalled();
                expect(loaderService.done).toHaveBeenCalled();
            });
        });
    });

})(angular);
