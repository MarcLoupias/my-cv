'use strict';

describe('Controller: MainCtrl', function () {

    var MainCtrl,
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
        MainCtrl = $controller('MainCtrl', {
            $scope: scope,
            dataService: dataService
        });

    }));

    it('should load data from dataService then attach data.jobs & data.skillCategories to the scope', function () {

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
                ],
                "skillCategories": [
                    {
                        "name": "Environnements",
                        "skillGroups": [
                            {"name":"Systèmes","skills":[{"name":"Linux Debian/Ubuntu","level":2},{"name":"Windows","level":2}]},
                            {"name":"Langages","skills":[{"name":"Bash","level":1},{"name":"perl","level":1}]},
                            {"name":"Protocoles","skills":[{"name":"HTTP","level":2},{"name":"FTP","level":3},{"name":"DNS","level":2},{"name":"TLS","level":1}]},
                            {"name":"Serveurs web","skills":[{"name":"Apache","level":2},{"name":"Tomcat","level":1}]},
                            {"name":"PaaS","skills":[{"name":"Plateforme Heroku","level":2,"skillUrl":"https://www.heroku.com/","skillUrlTitle":"www.heroku.com"}]}
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

        expect(scope.skillCategories).toBeDefined();
        expect(scope.skillCategories).not.toBeNull();
        expect(scope.skillCategories[0].name).toEqual('Environnements');
    });
});
