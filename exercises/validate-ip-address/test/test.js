const chai = require("chai");
const assert = chai.assert;

const ipChecker = require("../app.js");

describe("An IP address checker", function(){
   it("should reject lessthan 4 dot separated", function(){
     assert.isFalse(ipChecker(234.1.6.7254),false)  
   });
    
    it("should reject any letters", function(){
     assert.isFalse(ipChecker(ert.16.254.1));
        assert.isFalse(ipChecker())
   });
    
    it("should reject any symbols", function(){
     assert.isFalse(ipChecker(123.16.254.&))  
   });
    
//    it("should reject any -ve numbers", function(){
//     assert.equal(ipChecker(123.16.254.-2),false)  
//   });
//    
//    it("should check if the number string is a valid ip address ", function(){
//     assert.equal(ipChecker(172.16.254.1),true)  
//   });
//    
    
});

