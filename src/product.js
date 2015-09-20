/**
 * the Product class provides methods for computing mathematical products
 *
 * @type {{getProductsNotI}}
 */
var Product = (function () {
    var getArrayNotI,
        getProduct,
        getProductsNotI;

    /**
     * returns an array without a specified element
     *
     * @param {Array} nums The availableNumbers array
     * @param {Number} i The element not to return
     * @returns {Array.<T>|string|Blob|ArrayBuffer}
     */
    getArrayNotI = function (nums, i) {
        var arrayNotI = nums.slice(0);
        arrayNotI.splice(i, 1);
        return arrayNotI;
    };

    /**
     * returns the product of elements in an array
     *
     * @param {Array} nums The availableNumbers array
     *
     * @returns {Number} The product
     */
    getProduct = function (nums) {
        var product = nums[0],
            i;
        for (i = 1; i < nums.length; i++) {
            product *= nums[i];
        }
        return product;
    };

    /**
     * used to solve the following problem:
     *
     * Given an array of n integers where _n > 1_, `nums`, return an array `output` such that `output[i]`
     * is equal to the product of all the elements of nums except `nums[i]`.
     *
     * Solve it **without division** and leave a comment with the time complexity of your algorithm.
     * For example, given `[1,2,3,4]`, return `[24,12,8,6]`.
     *
     * NOTE: the following solution computes in ~O(n^2)
     *
     * @param {Array} nums The availableNumbers array
     *
     * @returns {Array} containing the products not I
     */
    getProductsNotI = function (nums) {
        var i,
            arrayNotI,
            productsNotI = [];
        for (i = 0; i < nums.length; i++) {
            arrayNotI = getArrayNotI(nums, i);
            productsNotI[i] = getProduct(arrayNotI);
        }
        return productsNotI;
    };

    // return public properties and methods
    return {
        getProductsNotI: getProductsNotI
    }
}());

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
    module.exports.Product = Product;
    module.exports.PairChecker = PairChecker;
}