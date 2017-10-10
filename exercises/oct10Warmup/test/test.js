const chai = require("chai");
const assert = chai.assert;

const frontCopy = require("../oct10Warmup.js");


describe("Copy the front n times", () =>{
  it("Should repeat the first 3 charaters of a string = front, n timess", ()=>{
    assert.deepEqual(frontCopy("ab",2),"abab");
    assert.deepEqual(frontCopy("ab",1),"ab");
  });

  it("Should repeat all charaters of a string = front, n timess", ()=>{
    assert.deepEqual(frontCopy("abcji",2),"abcabc");
    assert.deepEqual(frontCopy("abcji",1),"abc");
    assert.deepEqual(frontCopy("1w25", 2),"1W21w2")
  });
});
