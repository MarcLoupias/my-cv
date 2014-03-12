'use strict';

describe('Controller: EducationCtrl', function () {

    var EducationCtrl,
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
        EducationCtrl = $controller('EducationCtrl', {
            $scope: scope,
            dataService: dataService
        });

    }));

    it('should load data from dataService then attach data.degrees to the scope', function () {

        expect(true).toBe(true);

        var testData = {
            "data": {
                "degrees":[
                    {
                        "name":"degree_1",
                        "school":"School, Location",
                        "period":"(AAAA)",
                        "degreeDescription": [
                            {"desc":"POO, Design Pattern du GoF"}, {"desc":"Programmation Orientée Aspect"}, {"desc":"Java6"}
                        ]
                    }
                ]
            }
        };

        deferred.resolve(testData);

        scope.$root.$digest();

        expect(scope.degrees).toBeDefined();
        expect(scope.degrees).not.toBeNull();
        expect(scope.degrees[0].name).toEqual('degree_1');
    });
});
