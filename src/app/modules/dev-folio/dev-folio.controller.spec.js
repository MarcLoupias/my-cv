(function (angular) {
    'use strict';

    describe('app.devFolio.DevFolioController', function () {
        describe('when i start DevFolioController', function () {
            var controller;
            var log;

            beforeEach(function () {
                angular.mock.module('app.devFolio');
            });

            beforeEach(function () {
                angular.mock.inject(injectDep);

                function injectDep($controller, _$log_) {
                    controller = $controller;
                    log = _$log_;

                    spyOn(log, 'debug');
                }
            });

            it('should init data when dataService.data.devfolio values', function () {
                var dataService = {
                    data: {
                        devfolio: {
                            toto: 'toto',
                            bibi: 'bibi'
                        }
                    }
                };

                var DevFolioController = controller('DevFolioController', {
                    dataService: dataService,
                    $log: log
                });

                expect(DevFolioController.devfolio).toBeDefined();
                expect(DevFolioController.devfolio).toEqual(dataService.data.devfolio);
                expect(log.debug).toHaveBeenCalled();
            });
        });
    });

})(angular);
