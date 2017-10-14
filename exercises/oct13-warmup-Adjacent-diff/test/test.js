const chai = require("chai");
const assert = chai.assert;
const arrayFilter = require("../main.js");

describe("Return array with longest combined 3-word/string length", ()=>{
    it("should filter array with longest adjacent words/strings",()=>{
          assert.deepEqual(arrayFilter(["am", "I", "a", "good", "boy", "?"]),["a","good","boy"]);
          assert.deepEqual(arrayFilter(["Rexton", "is", "a", "good", "boy", "?"]),["Tommy","is","a"]);
    });
});
