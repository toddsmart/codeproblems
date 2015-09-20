/**
 * The Pair Checker class is used to test pairs of numbers
 *
 * @type {{hasPair}}
 */
var PairChecker = (function () {

    /**
     * Given a specific number (let's call it `n`) and an array of numbers (let's call it `numbers`)
     * write some code that returns a Boolean, indicating if there is a pair of numbers in `numbers` that
     * together add up to `n`.
     *
     * e.g.: n = 12, numbers = [1,2,3,4,5,6,7,8,9] -> true (because 5 + 7 == 12)
     * e.g.2.: n = 20, numbers = [1,2,3,4,5,6] -> false
     *
     * @param {Number} targetNumber The target number we are testing for
     * @param {Array} availableNumbers An array of numbers we check for pairs matching the target
     * @returns {boolean} True if we find the target
     */
    var hasPair = function (targetNumber, availableNumbers) {
        var currentNumber,
            nextNumber;
        while (availableNumbers.length) {
            currentNumber = availableNumbers.shift();
            for (nextNumber in availableNumbers) {
                if (targetNumber === currentNumber + availableNumbers[nextNumber]) {
                    return true;
                }
            }
        }
    }

    // return public properties and methods
    return {
        hasPair : hasPair
    }
}());

/* exports if node is in use */
if (module) {
    module.exports.PairChecker = PairChecker;
}