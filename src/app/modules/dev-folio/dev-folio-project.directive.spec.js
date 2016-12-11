(function (angular) {
    'use strict';

    describe('app.devFolio.cvDevFolioProject', function () {
        describe('when i compile cv-dev-folio-project directive', function () {
            var compile;
            var scope;
            var directiveElem;

            var projectData =
                {
                    name: 'Proof of Concept Play!-AngularJs',
                    deployedProjectUrl: 'http://poc-angular-frontend.herokuapp.com/',
                    deployedProjectUrlTitle: 'visiter la version déployée',
                    githubRepoList: [
                        {
                            repoUrl: 'https://github.com/MarcLoupias/poc-play-rest-backend',
                            repoUrlTitle: 'code source du backend'
                        },
                        {
                            repoUrl: 'https://github.com/MarcLoupias/poc-angular-frontend',
                            repoUrlTitle: 'code source du frontend'
                        }
                    ],
                    description: [
                        {p: 'Le projet montre une architecture blablabla'},
                        {p: 'Le projet est scindé en deux :'}
                    ],
                    technos: [
                        {name: 'Heroku'}, {name: 'MySQL'}, {name: 'Play!'}, {name: 'AngularJs'}, {name: 'Bootstrap'}
                    ],
                    languages: [
                        {name: 'SQL'}, {name: 'jPQL'}, {name: 'Java'}, {name: 'HTML5/CSS/Javascript'}
                    ],
                    environment: [
                        {name: 'GIT'}, {name: 'Ant'}, {name: 'Yeoman'}, {name: 'Grunt'}, {name: 'Bower'}
                    ]
                };

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.devFolio');
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                    scope.projectData = projectData;
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element(
                    '<div><cv-dev-folio-project project="projectData"></cv-dev-folio-project></div>'
                );
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should set project name properly', function () {
                var strongElem = directiveElem.find('strong');
                expect(strongElem).toBeDefined();
                expect(strongElem.text()).toEqual('Proof of Concept Play!-AngularJs');
            });

            it('should set deployed project url properly', function () {
                var aElem = directiveElem.find('a');
                expect(aElem).toBeDefined();
                expect(aElem.length).toEqual(3);
                expect(angular.element(aElem[0]).attr('href')).toEqual('http://poc-angular-frontend.herokuapp.com/');
            });

            it('should set deployed project title properly', function () {
                var aElem = directiveElem.find('a');
                expect(aElem).toBeDefined();
                expect(aElem.length).toEqual(3);
                expect(angular.element(aElem[0]).attr('title')).toEqual('visiter la version déployée');
            });

            it('should set deployed project href to open a new tab', function () {
                var aElem = directiveElem.find('a');
                expect(aElem).toBeDefined();
                expect(aElem.length).toEqual(3);
                expect(angular.element(aElem[0]).attr('target')).toEqual('_blank');
            });

            it('should set first repo url properly', function () {
                var aElem = directiveElem.find('a');
                expect(aElem).toBeDefined();
                expect(aElem.length).toEqual(3);
                expect(angular.element(aElem[1]).attr('href')).toEqual('https://github.com/MarcLoupias/poc-play-rest-backend');
            });

            it('should set first repo title properly', function () {
                var aElem = directiveElem.find('a');
                expect(aElem).toBeDefined();
                expect(aElem.length).toEqual(3);
                expect(angular.element(aElem[1]).attr('title')).toEqual('code source du backend');
            });

            it('should set first repo href to open a new tab', function () {
                var aElem = directiveElem.find('a');
                expect(aElem).toBeDefined();
                expect(aElem.length).toEqual(3);
                expect(angular.element(aElem[1]).attr('target')).toEqual('_blank');
            });

            it('should set second repo url properly', function () {
                var aElem = directiveElem.find('a');
                expect(aElem).toBeDefined();
                expect(aElem.length).toEqual(3);
                expect(angular.element(aElem[2]).attr('href')).toEqual('https://github.com/MarcLoupias/poc-angular-frontend');
            });

            it('should set second repo title properly', function () {
                var aElem = directiveElem.find('a');
                expect(aElem).toBeDefined();
                expect(aElem.length).toEqual(3);
                expect(angular.element(aElem[2]).attr('title')).toEqual('code source du frontend');
            });

            it('should set second repo href to open a new tab', function () {
                var aElem = directiveElem.find('a');
                expect(aElem).toBeDefined();
                expect(aElem.length).toEqual(3);
                expect(angular.element(aElem[2]).attr('target')).toEqual('_blank');
            });
        });
    });

})(angular);
