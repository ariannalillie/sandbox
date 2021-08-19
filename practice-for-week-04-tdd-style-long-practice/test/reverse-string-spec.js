// Your code here
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const reverseString = require('../problems/reverse-string')

describe("reverseString()", () => {
    it("should reverse a string", () => {
    const string1 = 'fun';

    const actual1 = reverseString(string1);

    expect(actual1).to.eql('nuf');
    });
});
