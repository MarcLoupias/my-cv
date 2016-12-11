(function (angular) {
    'use strict';

    describe('app.common.skills.skillBadgeHelper', function () {
        describe('when I call skillBadgeHelper.getBadgeClass(level)', function () {
            beforeEach(function () {
                angular.mock.module('app.common.skills');
            });

            it('should return empty string with level undefined or null', angular.mock.inject(function (skillBadgeHelper) {
                expect(skillBadgeHelper.getBadgeClass()).toBeDefined();
                expect(skillBadgeHelper.getBadgeClass()).not.toBeNull();
                expect(skillBadgeHelper.getBadgeClass()).toEqual('');

                expect(skillBadgeHelper.getBadgeClass(null)).toBeDefined();
                expect(skillBadgeHelper.getBadgeClass(null)).not.toBeNull();
                expect(skillBadgeHelper.getBadgeClass(null)).toEqual('');
            }));

            it('should return "skill-badge-lvl-2" with level equal 2', angular.mock.inject(function (skillBadgeHelper) {
                expect(skillBadgeHelper.getBadgeClass(2)).toEqual('skill-badge-lvl-2');
            }));
        });

        describe('when I call skillBadgeHelper.getBadgeTitle(level)', function () {
            beforeEach(function () {
                angular.mock.module('app.common.skills');
            });

            it('should return empty string with level undefined or null', angular.mock.inject(function (skillBadgeHelper) {
                expect(skillBadgeHelper.getBadgeTitle()).toBeDefined();
                expect(skillBadgeHelper.getBadgeTitle()).not.toBeNull();
                expect(skillBadgeHelper.getBadgeTitle()).toEqual('');

                expect(skillBadgeHelper.getBadgeTitle(null)).toBeDefined();
                expect(skillBadgeHelper.getBadgeTitle(null)).not.toBeNull();
                expect(skillBadgeHelper.getBadgeTitle(null)).toEqual('');
            }));

            it('should return "Débutant" with level equal 1', angular.mock.inject(function (skillBadgeHelper) {
                expect(skillBadgeHelper.getBadgeTitle(1)).toEqual('Débutant');
            }));

            it('should return "Initié" with level equal 2', angular.mock.inject(function (skillBadgeHelper) {
                expect(skillBadgeHelper.getBadgeTitle(2)).toEqual('Initié');
            }));

            it('should return "Confirmé" with level equal 3', angular.mock.inject(function (skillBadgeHelper) {
                expect(skillBadgeHelper.getBadgeTitle(3)).toEqual('Confirmé');
            }));

            it('should return "Expert" with level equal 4', angular.mock.inject(function (skillBadgeHelper) {
                expect(skillBadgeHelper.getBadgeTitle(4)).toEqual('Expert');
            }));

            it('should return empty string with level > 4', angular.mock.inject(function (skillBadgeHelper) {
                expect(skillBadgeHelper.getBadgeTitle(666)).toEqual('');
            }));
        });

        describe('when I call skillBadgeHelper.getBadgeText(level)', function () {
            beforeEach(function () {
                angular.mock.module('app.common.skills');
            });

            it('should return empty string with level undefined or null', angular.mock.inject(function (skillBadgeHelper) {
                expect(skillBadgeHelper.getBadgeText()).toBeDefined();
                expect(skillBadgeHelper.getBadgeText()).not.toBeNull();
                expect(skillBadgeHelper.getBadgeText()).toEqual('');

                expect(skillBadgeHelper.getBadgeText(null)).toBeDefined();
                expect(skillBadgeHelper.getBadgeText(null)).not.toBeNull();
                expect(skillBadgeHelper.getBadgeText(null)).toEqual('');
            }));

            it('should return a proper text with level equal 1', angular.mock.inject(function (skillBadgeHelper) {
                var text = 'Je passe plus de temps dans la documentation que dans le code.';
                expect(skillBadgeHelper.getBadgeText(1)).toEqual(text);
            }));

            it('should return a proper text with level equal 2', angular.mock.inject(function (skillBadgeHelper) {
                var text = 'Je passe plus de temps dans le code que dans la documentation.';
                expect(skillBadgeHelper.getBadgeText(2)).toEqual(text);
            }));

            it('should return a proper text with level equal 3', angular.mock.inject(function (skillBadgeHelper) {
                var text = 'Je ne consulte la documentation que pour des points très précis et peu usuels.';
                expect(skillBadgeHelper.getBadgeText(3)).toEqual(text);
            }));

            it('should return a proper text with level equal 4', angular.mock.inject(function (skillBadgeHelper) {
                var text = 'Des passages de mes livres sont cités sur les forums et les mailing lists ;-)';
                expect(skillBadgeHelper.getBadgeText(4)).toEqual(text);
            }));

            it('should return empty string with level > 4', angular.mock.inject(function (skillBadgeHelper) {
                expect(skillBadgeHelper.getBadgeText(666)).toEqual('');
            }));
        });
    });

})(angular);
