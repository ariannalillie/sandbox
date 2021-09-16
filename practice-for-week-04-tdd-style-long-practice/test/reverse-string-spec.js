const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const reverseString = require("../problems/reverse-string");

describe('reverseString()', function () {
    it('Should return the reversed output of the string passed in', function () {
        const test1 = 'fun';
        const actual1 = reverseString(test1);
        expect(actual1).to.eql('nuf');
    });
    it('Should throw TypeError is data type is not a string', function () {

        expect(() => reverseString(1)).to.throw(TypeError);
        expect(() => reverseString([1, 2, 3])).to.throw(TypeError);
    })
});

// Beware of some common mistakes when using the throw assertion.
// One common mistake is to accidentally invoke the function yourself
// instead of letting the throw assertion invoke the function for you.
