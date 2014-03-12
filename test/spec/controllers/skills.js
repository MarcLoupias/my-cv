'use strict';

describe('Controller: SkillsCtrl', function () {

    var SkillsCtrl,
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
        SkillsCtrl = $controller('SkillsCtrl', {
            $scope: scope,
            dataService: dataService
        });

    }));

    it('should load data from dataService then attach data.skillCategories to the scope', function () {

        expect(true).toBe(true);

        var testData = {
            "data": {
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

        expect(scope.skillCategories).toBeDefined();
        expect(scope.skillCategories).not.toBeNull();
        expect(scope.skillCategories[0].name).toEqual('Environnements');
    });

});
