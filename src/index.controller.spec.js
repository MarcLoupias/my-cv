'use strict';

describe('app.IndexController', function () {

    // load the controller's module
    beforeEach(module('app'));

    var IndexController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        IndexController = $controller('IndexController', {
            $scope: scope
        });
    }));

    it('should pass', function () {
        expect(true).toBe(true);
    });
});
