(function (angular) {
    'use strict';

    describe('app.workExperiences.cvExperienceFull', function () {
        describe('when i compile cv-experience-full directive', function () {
            var compile;
            var scope;
            var directiveElem;

            var jobData = {
                position: 'Tech lead AngularJS',
                company: 'Banque de France, Paris',
                logoUrl: 'assets/images/logos/logo-banque-de-france.150x150.png',
                period: '(juin 2015 à aujourd\'hui)',
                companyUrl: 'https://www.banque-france.fr',
                companyUrlTitle: 'Banque de France',
                jobDescription: 'Tech lead frontend sur le programme FIBRE.',
                tasks: [
                    {desc: "blablabla"},
                    {desc: "bliblibli"}
                ]
            };

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.workExperiences');
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                    scope.jobData = jobData;
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element('<div><cv-experience-full job="jobData"></cv-experience-full></div>');
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should set company href', function () {
                var aElement = directiveElem.find('a');
                expect(aElement.attr('href')).toEqual('https://www.banque-france.fr');
            });

            it('should open company website in another tab', function () {
                var aElement = directiveElem.find('a');
                expect(aElement.attr('target')).toEqual('_blank');
            });

            it('should set company logo src', function () {
                var imgElement = directiveElem.find('img');
                expect(imgElement.attr('src')).toEqual('assets/images/logos/logo-banque-de-france.150x150.png');
            });

            it('should set company logo alt', function () {
                var imgElement = directiveElem.find('img');
                expect(imgElement.attr('alt')).toEqual('Banque de France');
            });

            it('should set job position', function () {
                var strongElement = directiveElem.find('strong');
                expect(strongElement.text().trim()).toEqual('Tech lead AngularJS');
            });

            it('should set company name', function () {
                var h4ElementList = directiveElem.find('h4');
                var h4ElemCompanyName = angular.element(h4ElementList[1]);
                expect(h4ElemCompanyName.text().trim()).toEqual('Banque de France, Paris');
            });

            it('should set job period', function () {
                var smallElement = directiveElem.find('small');
                expect(smallElement.text().trim()).toEqual('(juin 2015 à aujourd\'hui)');
            });

            it('should set job description', function () {
                var pElement = directiveElem.find('p');
                expect(pElement.text().trim()).toEqual('Tech lead frontend sur le programme FIBRE.');
            });

            it('should set task list', function () {
                var liElemList = directiveElem.find('li');
                var liElem = angular.element(liElemList[0]);
                expect(liElem.text().trim()).toEqual('blablabla');

                liElem = angular.element(liElemList[1]);
                expect(liElem.text().trim()).toEqual('bliblibli');
            });
        });
    });

})(angular);

