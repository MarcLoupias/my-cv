(function (angular) {
    'use strict';

    describe('app.home.cvPersonalData', function () {
        describe('when i compile cv-personal-data directive', function () {
            var compile;
            var scope;
            var directiveElem;

            var data = {
                firstname: 'Marc',
                fullname: 'Loupias',
                photoUrl: 'assets/images/bibi.150x161.png',
                age: '35 ans',
                location: 'Paris',
                country: 'France',
                drivingLicence: 'Permis B',
                employmentStatus: 'Indisponible'
            };

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.home');
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                    scope.data = data;
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element('<div><cv-personal-data data="data"></cv-personal-data></div>');
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should set firstname and fullname', function () {
                var strongElemList = directiveElem.find('strong');
                var strongElem = angular.element(strongElemList[0]);
                expect(strongElem.text().trim()).toEqual('Marc Loupias');
            });

            it('should set photo url', function () {
                var imgElem = directiveElem.find('img');
                expect(imgElem.attr('src')).toEqual('assets/images/bibi.150x161.png');
            });

            it('should set age', function () {
                var liElemList = directiveElem.find('li');
                var liElem = angular.element(liElemList[0]);
                expect(liElem.text().trim()).toEqual('35 ans');
            });

            it('should set location', function () {
                var liElemList = directiveElem.find('li');
                var liElem = angular.element(liElemList[1]);
                expect(liElem.text().trim()).toEqual('Paris');
            });

            it('should set driving licence', function () {
                var liElemList = directiveElem.find('li');
                var liElem = angular.element(liElemList[2]);
                expect(liElem.text().trim()).toEqual('Permis B');
            });

            it('should set country', function () {
                var liElemList = directiveElem.find('li');
                var liElem = angular.element(liElemList[3]);
                expect(liElem.text().trim()).toEqual('France');
            });

            it('should set employment status', function () {
                var strongElemList = directiveElem.find('strong');
                var strongElem = angular.element(strongElemList[2]);
                expect(strongElem.text().trim()).toEqual('Indisponible');
            });
        });
    });

})(angular);
