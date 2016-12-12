(function (angular) {
    'use strict';

    describe('app.footer.cvFooter', function () {
        describe('when i compile cv-footer directive', function () {
            var compile;
            var scope;
            var directiveElem;

            var indexCtrlData = {
                gnrlInfos: {
                    websiteSourceCodeUrl: 'http://toto.fr',
                    version: '1.0.1'
                }
            };

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.footer');
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                    scope.indexCtrl = indexCtrlData;
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element(
                    '<div><cv-footer></cv-footer></div>'
                );
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should set general infos href properly', function () {
                var aElemList = directiveElem.find('a');
                var aGnrlInfosElem = angular.element(aElemList[0]);
                expect(aGnrlInfosElem.attr('href')).toEqual('http://toto.fr');
            });

            it('should set general infos href properly', function () {
                var aElemList = directiveElem.find('a');
                var aGnrlInfosElem = angular.element(aElemList[0]);
                expect(aGnrlInfosElem.text().trim()).toEqual('version 1.0.1');
            });
        });
    });

})(angular);
