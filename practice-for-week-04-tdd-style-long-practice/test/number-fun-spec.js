const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree()', function () {
    it('Should return the number 3', () => {
        const actual1 = returnsThree();

        expect(actual1).to.eql(3);
    });
})

describe('reciprocal(num)', () => {
    it('should return the reciprocal of the input', () => {
        const test1 = 4;

        const actual1 = reciprocal(test1);

        expect(actual1).to.eql(0.25);
    });
    it('Should only accept integers between 1 and 1,000,000', () => {
        expect(() => reciprocal(-2)).to.throw(TypeError)
        expect(() => reciprocal(1000200)).to.throw(TypeError)
    })
});
