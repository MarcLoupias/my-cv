describe('Testing the home view', function () {
    describe('using a large device (desktop) 1920x1280', function() {
        beforeEach(function () {
            cy.server();
            cy.route('GET', /assets\/json/, 'fixture:mocked-data.json');
            cy.viewport(1920, 1280);
            cy.visit('/');
        });

        testDesktopHomeView();
    });

    function testDesktopHomeView() {
        it('should render a desktop home view', function () {
            cy
                .get('#home-desktop-content-block-id')
                .should('have.class', 'hidden-xs')
                .find('div.row')
                .find('div.col-md-12')
                .find('div.well')
                .find('p')
                .contains('Lorem ipsum');
        });
    }
});
