'use strict';

describe('Controller: IndexCtrl', function () {

    var IndexCtrl,
        dataService,
        q,
        deferred,
        scope;

    // load the controller's module
    beforeEach(
        module('myCvApp', function () {

            dataService = {
                getJson: function () {
                    deferred = q.defer();
                    return deferred.promise;
                }
            };
        })
    );

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $q) {
        scope = $rootScope.$new();

        q = $q;
        IndexCtrl = $controller('IndexCtrl', {
            $scope: scope,
            dataService: dataService
        });

    }));

    it('should load data from dataService then attach data.generalInformations to the scope', function () {

        expect(true).toBe(true);

        var testData = {
            "data": {
                "generalInformations": {
                    "version":"0.1.4",
                    "websiteSourceCodeUrl":"https://github.com/MarcLoupias/my-cv/releases/tag/0.1.3",
                    "cvTitle":"Développeur web Full Stack",
                    "firstname":"Marc",
                    "fullname":"Loupias",
                    "photoUrl":"../images/bibi.150x161.png",
                    "age":"32 ans",
                    "location":"Paris",
                    "country":"France",
                    "drivingLicence":"Permis B",
                    "phone":"sur demande par email",
                    "email":{
                        "mailto":"pro@marc-loupias.fr",
                        "subject":"Développeur web Full Stack"
                    }
                }
            }
        };

        deferred.resolve(testData);

        scope.$root.$digest();

        expect(scope.gnrlInfos).toBeDefined();
        expect(scope.gnrlInfos).not.toBeNull();
        expect(scope.gnrlInfos.firstname).toEqual('Marc');
    });
});
