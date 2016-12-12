(function (angular) {
    'use strict';

    describe('app.education.cvDegree', function () {
        describe('when i compile cv-degree directive', function () {
            var compile;
            var scope;
            var directiveElem;

            var degreeData = {
                name: 'Ingénieur systèmes et logiciels (Non-obtenu, en cours)',
                school: 'CNAM, Toulouse (31)',
                period: '(2012)',
                schoolUrl: 'http://formation.cnam.fr/',
                schoolUrlTitle: 'visiter la fiche de formation du CNAM',
                degreeDescription: [
                    {desc: 'POO, Design Pattern du GoF'}, {desc: 'Programmation Orientée Aspect'}, {desc: 'Java6'}
                ]
            };

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.education');
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                    scope.degreeData = degreeData;
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element(
                    '<div><cv-degree degree="degreeData"></cv-degree></div>'
                );
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should set degree name properly', function () {
                var strongElem = directiveElem.find('strong');
                expect(strongElem).toBeDefined();
                expect(strongElem.text()).toEqual('Ingénieur systèmes et logiciels (Non-obtenu, en cours)');
            });

            it('should set degree school properly', function () {
                var h4SchoolElem = directiveElem.find('span');
                expect(h4SchoolElem).toBeDefined();
                expect(h4SchoolElem.text()).toEqual('CNAM, Toulouse (31)');
            });

            it('should set degree period properly', function () {
                var h4PeriodElem = directiveElem.find('small');
                expect(h4PeriodElem).toBeDefined();
                expect(h4PeriodElem.text()).toEqual('(2012)');
            });

            it('should set skill description in degree description properly', function () {
                var liElemList = directiveElem.find('li');
                expect(liElemList).toBeDefined();
                expect(liElemList.length).toEqual(3);
                expect(angular.element(liElemList[0]).text()).toEqual('POO, Design Pattern du GoF');
                expect(angular.element(liElemList[1]).text()).toEqual('Programmation Orientée Aspect');
                expect(angular.element(liElemList[2]).text()).toEqual('Java6');
            });

            it('should set school href properly', function () {
                var aElem = directiveElem.find('a');
                expect(aElem).toBeDefined();
                expect(aElem.attr('href')).toEqual('http://formation.cnam.fr/');
            });

            it('should set school title properly', function () {
                var aElem = directiveElem.find('a');
                expect(aElem).toBeDefined();
                expect(aElem.attr('title')).toEqual('visiter la fiche de formation du CNAM');
            });

            it('should set school href to open a new tab', function () {
                var aElem = directiveElem.find('a');
                expect(aElem).toBeDefined();
                expect(aElem.attr('target')).toEqual('_blank');
            });
        });
    });

})(angular);
