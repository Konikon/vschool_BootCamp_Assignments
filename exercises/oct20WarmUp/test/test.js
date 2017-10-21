const chai = require("chai");
const assert = chai.assert;

const twoSum = require("../main")

const tests = {
  case0: {
    arr: [1,2,3],
    target: 4
  }
}

describe("do sum test",()=>{
  it("two numbers whose indices add up to target", ()=>{
    assert.deepEqual(twoSum(tests.case0.arr, tests.case0.target),[0,2])
  });
});
