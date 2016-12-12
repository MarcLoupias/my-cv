(function (angular) {
    'use strict';

    describe('app.home.cvContact', function () {
        describe('when i compile cv-contact directive', function () {
            var compile;
            var scope;
            var directiveElem;

            var contactData = {
                phone: 'sur demande par email',
                email: {
                    mailto: 'pro@marc-loupias.fr',
                    subject: 'Développeur web Full Stack'
                },
                socialNetworks: {
                    github: {
                        url: 'https://github.com/MarcLoupias',
                        urlTitle: 'profil GitHub'
                    },
                    linkedin: {
                        url: 'http://fr.linkedin.com/pub/marc-loupias/91/714/4aa/',
                        urlTitle: 'profil linkedin'
                    },
                    viadeo: {
                        url: 'http://www.viadeo.com/fr/profile/marc.loupias',
                        urlTitle: 'profil viadeo'
                    }
                }
            };

            beforeEach(function () {
                angular.mock.module('app');
                angular.mock.module('app.home');
                angular.mock.inject(injectDep);

                function injectDep($compile, $rootScope) {
                    compile = $compile;
                    scope = $rootScope.$new();
                    scope.contactData = contactData;
                }

                directiveElem = getCompiledElement();
            });

            function getCompiledElement() {
                var element = angular.element('<div><cv-contact data="contactData"></cv-contact></div>');
                var compiledElement = compile(element)(scope);
                scope.$digest();
                return compiledElement;
            }

            it('should set phone', function () {
                var spanElemList = directiveElem.find('span');
                var spanPhoneElem = angular.element(spanElemList[1]);
                expect(spanPhoneElem.text()).toEqual('sur demande par email');
            });

            it('should set mailto', function () {
                var aElemList = directiveElem.find('a');
                var aElem = angular.element(aElemList[0]);
                expect(aElem.attr('href')).toEqual('mailto:pro@marc-loupias.fr?subject=Développeur web Full Stack');
            });

            it('should display mail on mailto link', function () {
                var aElemList = directiveElem.find('a');
                var aElem = angular.element(aElemList[0]);
                expect(aElem.text().trim()).toEqual('pro@marc-loupias.fr');
            });

            it('should set github href', function () {
                var aElemList = directiveElem.find('a');
                var aElem = angular.element(aElemList[1]);
                expect(aElem.attr('href')).toEqual('https://github.com/MarcLoupias');
            });

            it('should set github title', function () {
                var aElemList = directiveElem.find('a');
                var aElem = angular.element(aElemList[1]);
                expect(aElem.attr('title')).toEqual('profil GitHub');
            });

            it('should set linkedin href', function () {
                var aElemList = directiveElem.find('a');
                var aElem = angular.element(aElemList[2]);
                expect(aElem.attr('href')).toEqual('http://fr.linkedin.com/pub/marc-loupias/91/714/4aa/');
            });

            it('should set linkedin title', function () {
                var aElemList = directiveElem.find('a');
                var aElem = angular.element(aElemList[2]);
                expect(aElem.attr('title')).toEqual('profil linkedin');
            });

            it('should set viadeo href', function () {
                var aElemList = directiveElem.find('a');
                var aElem = angular.element(aElemList[3]);
                expect(aElem.attr('href')).toEqual('http://www.viadeo.com/fr/profile/marc.loupias');
            });

            it('should set viadeo title', function () {
                var aElemList = directiveElem.find('a');
                var aElem = angular.element(aElemList[3]);
                expect(aElem.attr('title')).toEqual('profil viadeo');
            });
        });
    });

})(angular);
