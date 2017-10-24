describe('Testing the main menu', function () {
    context('using a small device (phone) <768 in portrait', function() {
        beforeEach(function () {
            cy.viewport(300, 500);
            cy.visit('http://localhost:3000');
        });

        testMobileBurgerMenu();
    });

    context('using a small device (phone) <768 in landscape', function() {
        beforeEach(function () {
            cy.viewport(500, 300);
            cy.visit('http://localhost:3000');
        });

        testMobileBurgerMenu();
    });

    context('using a small device (tablet) 768x1024 in portrait', function() {
        beforeEach(function () {
            cy.viewport(768, 1024);
            cy.visit('http://localhost:3000');
        });

        testDesktopMainMenu();
    });

    context('using a small device (tablet) 1024x768 in landscape', function() {
        beforeEach(function () {
            cy.viewport(1024, 768);
            cy.visit('http://localhost:3000');
        });

        testDesktopMainMenu();
    });

    context('using a medium device (desktop) 1280x800', function() {
        beforeEach(function () {
            cy.viewport(1280, 800);
            cy.visit('http://localhost:3000');
        });

        testDesktopMainMenu();
    });

    context('using a large device (desktop) 1920x1280', function() {
        beforeEach(function () {
            cy.viewport(1920, 1280);
            cy.visit('http://localhost:3000');
        });

        testDesktopMainMenu();
    });

    function testMobileBurgerMenu() {
        it('should render a working burger menu', function() {
            cy.visit('http://localhost:3000');

            cy
                .get('#btn-burger-menu-id')
                .as('burgerMenu')
                .click();
            cy
                .get('#burger-menu-item-experiences')
                .click();
            cy
                .get('#view-header-title-work-experience-id')
                .contains('Expériences');

            cy
                .get('@burgerMenu')
                .click();
            cy
                .get('#burger-menu-item-skills')
                .click();
            cy
                .get('#view-header-title-skills-id')
                .contains('Compétences');

            cy
                .get('@burgerMenu')
                .click();
            cy
                .get('#burger-menu-item-education')
                .click();
            cy
                .get('#view-header-title-education-id')
                .contains('Formations');

            cy
                .get('@burgerMenu')
                .click();
            cy
                .get('#burger-menu-item-devfolio')
                .click();
            cy
                .get('#view-header-title-dev-folio-id')
                .contains('Devfolio');

        });
    }

    function testDesktopMainMenu() {
        it('should render a working desktop menu', function() {
            cy.visit('http://localhost:3000');

            cy
                .get('#desktop-menu-item-experiences')
                .click();
            cy
                .get('#view-header-title-work-experience-id')
                .contains('Expériences');

            cy
                .get('#desktop-menu-item-skills')
                .click();
            cy
                .get('#view-header-title-skills-id')
                .contains('Compétences');

            cy
                .get('#desktop-menu-item-education')
                .click();
            cy
                .get('#view-header-title-education-id')
                .contains('Formations');

            cy
                .get('#desktop-menu-item-devfolio')
                .click();
            cy
                .get('#view-header-title-dev-folio-id')
                .contains('Devfolio');

        });
    }
});
