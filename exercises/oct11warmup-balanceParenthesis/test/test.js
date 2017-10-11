const chai = require ("chai");
const assert = chai.assert;
const pCheck = require("../main.js");

describe("Parathesis checker", function(){
    it("should check every opening ( has closing )", function(){
        assert.isTrue(pCheck("()"),true);
        assert.isFalse(pCheck("(("),false);
  });
    it("should check every opening ( is before closing )", function(){
        assert.isFalse(pCheck(")()("),false);
  });
});
