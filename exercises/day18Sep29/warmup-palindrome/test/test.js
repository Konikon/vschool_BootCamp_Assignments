var chai = require("chai");
var assert = chai.assert;


var pallinGen = require("../main.js");

describe("pallindrome checker", function(){
    
    it("should not return false if not pallindrome", function(){
        assert.equal(pallinGen("pallindrome"),false);
    });
    it("should check the mirror image of letters in a word(s)", function(){
        assert.equal(pallinGen("racecar"),true);
    });
     it("should ignore capitalzation", function(){
        assert.equal(pallinGen("StarRats"),true);
    });
     it("should ignore space", function(){
        assert.equal(pallinGen("Star Rats"),true);
    });
     it("should ignore special charecters", function(){
        assert.equal(pallinGen("I madam, I made radio! So I dared! Am I mad?? Am I?!"),true);
    });
});