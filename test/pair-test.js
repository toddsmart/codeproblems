var assert = require("assert");

var PairChecker = require('../src/pair.js').PairChecker;

describe('PairChecker', function() {
    describe('#hasPair()', function () {
        it('should return true given n = 12, numbers = [1,2,3,4,5,6,7,8,9] -> true (because 5 + 7 == 12)', function () {
            assert(PairChecker.hasPair(12, [1,2,3,4,5,6,7,8,9]));
        });
        it('should return false given n = 20, numbers = [1,2,3,4,5,6] -> true (because 5 + 7 == 12)', function () {
            assert(!PairChecker.hasPair(20, [1,2,3,4,5,6]));
        });
    });
});