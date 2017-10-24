describe('Testing webapp boostrap', function() {
    beforeEach(function() {
        cy.server();
        cy.route('GET', /assets\/json/, 'fixture:mocked-data.json');
    });

    context('using a small device (phone) <768 in portrait', function() {
        beforeEach(function () {
            cy.viewport(300, 500);
            cy.visit('/');
        });

        testMobile();
    });

    context('using a small device (phone) <768 in landscape', function() {
        beforeEach(function () {
            cy.viewport(500, 300);
            cy.visit('/');
        });

        testMobile();
    });

    context('using a small device (tablet) 500x768 in portrait', function() {
        beforeEach(function () {
            cy.viewport(500, 768);
            cy.visit('/');
        });

        testDesktop();
    });

    context('using a small device (tablet) 768x500 in landscape', function() {
        beforeEach(function () {
            cy.viewport(768, 500);
            cy.visit('/');
        });

        testDesktop();
    });

    context('using a medium device (desktop) 992x900', function() {
        beforeEach(function () {
            cy.viewport(992, 900);
            cy.visit('/');
        });

        testDesktop();
    });

    context('using a large device (desktop) 1200x1000', function() {
        beforeEach(function () {
            cy.viewport(1200, 1000);
            cy.visit('/');
        });

        testDesktop();
    });

    function testDesktop() {
        it('then the desktop home block should load', function() {
            cy
                .title()
                .should('eq', 'Marc Loupias - Développeur web Full Stack Java AngularJS');

            cy
                .get('#home-desktop-content-block-id');
        });
    }

    function testMobile() {
        it('then the desktop home block should load', function() {
            cy
                .title()
                .should('eq', 'Marc Loupias - Développeur web Full Stack Java AngularJS');

            cy
                .get('#home-mobile-content-block-id');
        });
    }
});
