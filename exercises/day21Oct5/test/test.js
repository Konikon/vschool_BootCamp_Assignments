const chai = require("chai");
const assert = chai.assert;

const arrMapEx =require("../main.js");

describe("array map exercise", () => {
    
    it("should double array members", () => {
        assert.deepEqual(arrMapEx.double([1]),[2]);
        assert.deepEqual(arrMapEx.double([-2]),[-4]);
    });
    
     it("should return empty array members if empty", () => {
        assert.deepEqual(arrMapEx.double([]),[]);
    });

    
    
     it("should stringify array members", function(){
        assert.deepEqual(arrMapEx.stringUp([1]),["1"])
    });
     it("should return empty array members if empty", () => {
        assert.deepEqual(arrMapEx.double([]),[]);
    });
    
     it("should only select array members by name", () => {
         const tests = {
             test1:  [{name: 1,age:2}, {name: "Bob", age: 2}],
              
         }
        assert.deepEqual(arrMapEx.nameFilter(tests.test1,["1","Bob"]))
    });
//    
//    it("The Matrix", () => {
//    const tests = {
//             test1:  [{name: 1,age:2}, {name: "Bob", age: 2}],
//         }
//        assert.deepEqual(tests.test1,["James can go to the Materix","Bob"]))
//    });
//    
    
});