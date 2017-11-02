const chai = require("chai");
const assert = chai.assert;
const uniqueFinder = require("../main");

let tests = {
  arr1:{1,2,3},
  arr2:{2,3,4},
  case0: {1,4},
  arr3: {a,b,c},
  arr4:{b,c,d},
  case1: {a,d},
  arr5: {},
  arr6: {1,2,3},
  case2:{1,2,3}
}

describe("unique item fetching from arrays" ()=>{
  it("should find unique elements from both arrays",()=>{
    assert.deepEqual(uniqueFinder(tests.arr1,tests.arr2),test.case0)
  });
  it("should find unique elements from both arrays",()=>{
    assert.deepEqual(uniqueFinder(tests.arr3,tests.arr4),test.case1)
  });
  it("should find unique elements from both arrays",()=>{
    assert.deepEqual(uniqueFinder(tests.arr5,tests.arr6),test.case2)
  });
})
