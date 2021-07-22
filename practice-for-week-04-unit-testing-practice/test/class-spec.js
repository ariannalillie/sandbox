const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      let newWord = new Word('happy');

      expect(newWord).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      let newWord = new Word('happy');

      expect(newWord.word).to.eql('happy');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let test1 = new Word('book');

      const result = test1.removeVowels();

      expect(result).to.eql('bk');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let test1 = new Word('book');

      const result = test1.removeConsonants();

      expect(result).to.eql('oo');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let test1 = new Word('food');

      const result = test1.pigLatin();

      expect(result).to.eql('oodfay');
    });
  });
});
