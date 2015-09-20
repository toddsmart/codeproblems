var assert = require("assert");

var Product = require('../src/product.js').Product;

describe('Product', function() {
    describe('#getProductsNotI()', function () {
        it('should return [24,12,8,6] given [1,2,3,4]', function () {
            assert.deepEqual([24,12,8,6], Product.getProductsNotI([1,2,3,4]));
        });
    });
});