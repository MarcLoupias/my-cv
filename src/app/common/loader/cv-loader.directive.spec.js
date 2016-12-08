(function (angular) {
    'use strict';

    describe('app.common.loader.cvLoader', function () {
        describe('when i compile cv-loader directive', function () {
            var compile;
            var scope;
            var directiveElem;

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element('<div><cv-loader></cv-loader></div>');
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should have an <img>', function () {
                var imgElement = directiveElem.find('img');
                expect(imgElement).toBeDefined();
            });

            it('should have an <h5> with "Chargement en cours ... Veuillez patienter" text', function () {
                var h5Element = directiveElem.find('h5');
                expect(h5Element).toBeDefined();
                expect(h5Element.text()).toBe('Chargement en cours ... Veuillez patienter');
            });
        });
    });

})(angular);
