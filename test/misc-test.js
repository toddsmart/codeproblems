var assert = require("assert");

var Misc = require('../src/misc.js').Misc;

describe('Misc', function() {
    describe('#palindrome()', function () {
        it('should return true given "tattarrattat"', function () {
            assert(Misc.palindrome('tattarrattat'));
        });
        it('should return true given "racecar"', function () {
            assert(Misc.palindrome('racecar'));
        });
        it('should return false given "onetwo"', function () {
            assert(!Misc.palindrome('onetwo'));
        });
    });
});