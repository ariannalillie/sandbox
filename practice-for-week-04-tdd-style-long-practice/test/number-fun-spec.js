const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { returnsThree } = require('../problems/number-fun');

describe('returnsThree()', function () {
    it('Should return the number 3', () => {
        const actual1 = returnsThree();

        expect(actual1).to.eql(3);
    });
})
