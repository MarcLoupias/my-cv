(function (angular) {
    'use strict';

    describe('app.home.cvIntroductionText', function () {
        describe('when i compile cv-introduction-text directive', function () {
            var compile;
            var scope;
            var directiveElem;

            var data = [{text: 'ba'}, {text: 'be'}, {text: 'bi'}];

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
                var element = angular.element('<div><cv-introduction-text data="data"></cv-introduction-text></div>');
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should set introduction text', function () {
                var pElemList = directiveElem.find('p');
                var pElem = angular.element(pElemList[0]);
                expect(pElem.text().trim()).toEqual('ba');

                pElem = angular.element(pElemList[1]);
                expect(pElem.text().trim()).toEqual('be');

                pElem = angular.element(pElemList[2]);
                expect(pElem.text().trim()).toEqual('bi');
            });
        });
    });

})(angular);
