'use strict';

describe('Controller: DevfolioCtrl', function () {

    var DevfolioCtrl,
        dataService,
        q,
        deferred,
        scope;

    // load the controller's module
    beforeEach(
        module('myCvApp', function() {

            dataService = {
                getJson: function() {
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
        DevfolioCtrl = $controller('DevfolioCtrl', {
            $scope: scope,
            dataService:dataService
        });
    }));

    it('should load data from dataService then attach data.devfolio to the scope', function () {

        expect(true).toBe(true);

        var testData = {
            "data": {
                "devfolio":[
                    {
                        "name":"project",
                        "deployedProjectUrl":"http://poc-angular-frontend.herokuapp.com/",
                        "deployedProjectUrlTitle":"visiter la version déployée"
                    }
                ]
            }
        };

        deferred.resolve(testData);

        scope.$root.$digest();

        expect(scope.devfolio).toBeDefined();
        expect(scope.devfolio).not.toBeNull();
        expect(scope.devfolio[0].name).toEqual('project');
    });
});
