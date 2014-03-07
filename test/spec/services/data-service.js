'use strict';

describe('Service: dataService', function () {

    // load the service's module
    beforeEach(module('myCvApp'));

    // instantiate service
    var dataService, $httpBackend, jsonFile;
    beforeEach(inject(function (_dataService_, $injector) {
        dataService = _dataService_;

        jsonFile = {
            "generalInformations":{
                "version":"0.1.4",
                "websiteSourceCodeUrl":"https://github.com/MarcLoupias/my-cv/releases/tag/0.1.4",
                "cvTitle":"Développeur web Full Stack",
                "firstname":"Marc",
                "fullname":"Loupias"
            }
        };

        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        // backend definition common for all tests
        $httpBackend.when('GET', 'my-data.json').respond(
            jsonFile
        );

    }));

    afterEach(function() {
        // Verifies that all of the requests defined via the expect api were made.
        $httpBackend.verifyNoOutstandingExpectation();
        // Verifies that there are no outstanding requests that need to be flushed.
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('dataService.getJson()', function() {

        it('should fetch my-data.json', function() {
            $httpBackend.expectGET('my-data.json');
            var res = dataService.getJson();
            $httpBackend.flush();
            expect(res).toBeDefined();
            expect(res).not.toBeNull();

            res.then(function (rezz) {
                expect(rezz.data).toEqual(jsonFile);
                expect(rezz.data.generalInformations.version).toEqual('0.1.4');
            });


        });

    });

});
