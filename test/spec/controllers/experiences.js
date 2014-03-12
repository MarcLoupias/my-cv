'use strict';

describe('Controller: ExperiencesCtrl', function () {

    var ExperiencesCtrl,
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
        ExperiencesCtrl = $controller('ExperiencesCtrl', {
            $scope: scope,
            dataService: dataService
        });
    }));

    it('should load data from dataService then attach data.jobs to the scope', function () {

        expect(true).toBe(true);

        var testData = {
            "data": {
                "jobs": [
                    {
                        "position": "Consultant Java/J2EE web",
                        "company": "BK-Consulting, Paris",
                        "logoUrl":"../images/logos/logo-bk.150x83.png",
                        "period": "(mai 2013 à nov. 2013)",
                        "companyUrl": "http://www.bk-consulting.fr/bk/racine/",
                        "companyUrlTitle": "BK Consulting",
                        "jobDescription": "Développement de deux applications web au forfait en mode agile (SCRUM) dans le domaine de l'hotellerie.",
                        "tasks": [
                            {"desc":"Développement en Java et SQL des serveurs d'applications (Play! et MySQL)"},
                            {"desc":"Développement du frontend avec Bootstrap et AngularJs"}
                        ]
                    }
                ]
            }
        };

        deferred.resolve(testData);

        scope.$root.$digest();

        expect(scope.jobs).toBeDefined();
        expect(scope.jobs).not.toBeNull();
        expect(scope.jobs[0].position).toEqual('Consultant Java/J2EE web');
    });
});
