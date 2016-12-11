(function (angular) {
    'use strict';

    describe('app.common.dataService', function () {
        describe('when I call dataService.init()', function () {
            var dataService;
            var $httpBackend;
            var requestHandler;

            var getPayload = {
                generalInformations: {
                    toto: 'toto',
                    val: 1
                },
                jobs: {
                    tata: 'tata',
                    val: 2
                },
                skillCategories: {
                    titi: 'titi',
                    val: 3
                },
                degrees: {
                    tutu: 'tutu',
                    val: 4
                },
                devfolio: {
                    tete: 'tete',
                    val: 5
                }
            };

            beforeEach(function () {
                angular.mock.module('app.common');
                angular.mock.inject(injectDataService);

                function injectDataService(_dataService_, _$httpBackend_) {
                    dataService = _dataService_;
                    expect(typeof dataService).toEqual('object');

                    $httpBackend = _$httpBackend_;
                    requestHandler = $httpBackend.whenGET('assets/json/data.json').respond(getPayload);
                }
            });

            afterEach(function () {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            it('should bind data properly', function () {
                $httpBackend.expectGET('assets/json/data.json');

                expect(dataService.data).toBeDefined();
                expect(dataService.data.gnrlInfos).toBeDefined();
                expect(dataService.data.jobs).toBeNull();
                expect(dataService.data.skillCategories).toBeNull();
                expect(dataService.data.degrees).toBeNull();
                expect(dataService.data.devfolio).toBeNull();

                dataService.init();
                $httpBackend.flush();

                expect(dataService.data).toBeDefined();
                expect(dataService.data.gnrlInfos).toEqual(getPayload.generalInformations);
                expect(dataService.data.jobs).toEqual(getPayload.jobs);
                expect(dataService.data.skillCategories).toEqual(getPayload.skillCategories);
                expect(dataService.data.degrees).toEqual(getPayload.degrees);
                expect(dataService.data.devfolio).toEqual(getPayload.devfolio);
            });

            it('should not bind data and catch error properly in case of server error', function () {
                requestHandler.respond(500, 'internal server error');

                $httpBackend.expectGET('assets/json/data.json');

                expect(dataService.data).toBeDefined();
                expect(dataService.data.gnrlInfos).toBeDefined();
                expect(dataService.data.jobs).toBeNull();
                expect(dataService.data.skillCategories).toBeNull();
                expect(dataService.data.degrees).toBeNull();
                expect(dataService.data.devfolio).toBeNull();

                var promise = dataService.init();
                $httpBackend.flush();

                expect(dataService.data).toBeDefined();
                expect(dataService.data.gnrlInfos).toBeDefined();
                expect(dataService.data.jobs).toBeNull();
                expect(dataService.data.skillCategories).toBeNull();
                expect(dataService.data.degrees).toBeNull();
                expect(dataService.data.devfolio).toBeNull();

                promise.catch(function (e) {
                    expect(e).toBeDefined();
                    expect(e.status).toEqual(500);
                    expect(e.data).toEqual('internal server error');
                });
            });
        });
    });

})(angular);
