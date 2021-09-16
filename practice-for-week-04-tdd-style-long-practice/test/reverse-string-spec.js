const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');

describe('reverseString()', function () {
    it('Should return the reversed output of the string passed in', function () {
        const test1 = 'fun';
        const actual1 = reverseString(test1);
        expect(actual1).to.eql('nuf');
    });
});
