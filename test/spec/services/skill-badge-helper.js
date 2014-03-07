'use strict';

describe('Service: skillBadgeHelper', function () {

    // load the service's module
    beforeEach(module('myCvApp'));

    // instantiate service
    var skillBadgeHelper;
    beforeEach(inject(function (_skillBadgeHelper_) {
        skillBadgeHelper = _skillBadgeHelper_;
    }));

    it('should do something', function () {
        expect(true).toBe(true);
    });

    describe('skillBadgeHelper.getBadgeClass(level)', function() {

        it('returns empty string for level = null', inject(function (skillBadgeHelper) {
            var res;
            res = skillBadgeHelper.getBadgeClass(null);
            expect(res).toBeDefined();
            expect(res).not.toBeNull();
            expect(res).toEqual('');
        }));

        it('returns \'skill-badge-lvl-1\' string for level = 1', inject(function (skillBadgeHelper) {
            var res;
            res = skillBadgeHelper.getBadgeClass(1);
            expect(res).toBeDefined();
            expect(res).not.toBeNull();
            expect(res).toEqual('skill-badge-lvl-1');
        }));

        it('returns \'skill-badge-lvl-1\' string for level = \'1\'', inject(function (skillBadgeHelper) {
            var res;
            res = skillBadgeHelper.getBadgeClass('1');
            expect(res).toBeDefined();
            expect(res).not.toBeNull();
            expect(res).toEqual('skill-badge-lvl-1');
        }));
    });

    describe('skillBadgeHelper.getBadgeTitle(level)', function() {

        it('returns empty string for level = null', inject(function (skillBadgeHelper) {
            var res;
            res = skillBadgeHelper.getBadgeTitle(null);
            expect(res).toBeDefined();
            expect(res).not.toBeNull();
            expect(res).toEqual('');
        }));

        it('returns \'Débutant\' string for level = 1', inject(function (skillBadgeHelper) {
            var res;
            res = skillBadgeHelper.getBadgeTitle(1);
            expect(res).toBeDefined();
            expect(res).not.toBeNull();
            expect(res).toEqual('Débutant');
        }));

        it('returns \'Initié\' string for level = 2', inject(function (skillBadgeHelper) {
            var res;
            res = skillBadgeHelper.getBadgeTitle(2);
            expect(res).toBeDefined();
            expect(res).not.toBeNull();
            expect(res).toEqual('Initié');
        }));

        it('returns \'Confirmé\' string for level = 3', inject(function (skillBadgeHelper) {
            var res;
            res = skillBadgeHelper.getBadgeTitle(3);
            expect(res).toBeDefined();
            expect(res).not.toBeNull();
            expect(res).toEqual('Confirmé');
        }));

        it('returns \'Expert\' string for level = 4', inject(function (skillBadgeHelper) {
            var res;
            res = skillBadgeHelper.getBadgeTitle(4);
            expect(res).toBeDefined();
            expect(res).not.toBeNull();
            expect(res).toEqual('Expert');
        }));

        it('returns empty string for any other level value', inject(function (skillBadgeHelper) {
            var res;
            res = skillBadgeHelper.getBadgeTitle(666);
            expect(res).toBeDefined();
            expect(res).not.toBeNull();
            expect(res).toEqual('');
        }));
    });

    describe('skillBadgeHelper.getBadgeText(level)', function() {

        it('returns empty string for level = null', inject(function (skillBadgeHelper) {
            var res;
            res = skillBadgeHelper.getBadgeText(null);
            expect(res).toBeDefined();
            expect(res).not.toBeNull();
            expect(res).toEqual('');
        }));

        it('returns \'Je passe plus de temps dans la documentation que dans le code.\' string for level = 1',
            inject(function (skillBadgeHelper) {

                var res;
                res = skillBadgeHelper.getBadgeText(1);
                expect(res).toBeDefined();
                expect(res).not.toBeNull();
                expect(res).toEqual('Je passe plus de temps dans la documentation que dans le code.');
        }));

        it('returns \'Je passe plus de temps dans le code que dans la documentation.\' string for level = 2',
            inject(function (skillBadgeHelper) {

                var res;
                res = skillBadgeHelper.getBadgeText(2);
                expect(res).toBeDefined();
                expect(res).not.toBeNull();
                expect(res).toEqual('Je passe plus de temps dans le code que dans la documentation.');
        }));

        it('returns \'Je ne consulte la documentation que pour des points très précis et peu usuels.\' string for level = 3',
            inject(function (skillBadgeHelper) {

                var res;
                res = skillBadgeHelper.getBadgeText(3);
                expect(res).toBeDefined();
                expect(res).not.toBeNull();
                expect(res).toEqual('Je ne consulte la documentation que pour des points très précis et peu usuels.');
        }));

        it('returns \'Des passages de mes livres sont cités sur les forums et les mailing lists ;-)\' string for level = 4',
            inject(function (skillBadgeHelper) {

                var res;
                res = skillBadgeHelper.getBadgeText(4);
                expect(res).toBeDefined();
                expect(res).not.toBeNull();
                expect(res).toEqual('Des passages de mes livres sont cités sur les forums et les mailing lists ;-)');
        }));

        it('returns empty string for any other level value', inject(function (skillBadgeHelper) {
            var res;
            res = skillBadgeHelper.getBadgeText(666);
            expect(res).toBeDefined();
            expect(res).not.toBeNull();
            expect(res).toEqual('');
        }));


    });
});
