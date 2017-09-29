var chai = require("chai");
var assert = chai.assert;

describe("A Calculator", function(){
    
var calculator = require("../calc.js");
    
   it("should add two numbers", function(){
      
       assert.equal(calculator.add(1,2),3);
       assert.equal(calculator.add(-1,-2),-3);
   }) ;
    
    it("should subtract two numbers", function(){
      
       assert.equal(calculator.sub(1,2),-1);
       assert.equal(calculator.sub(-1,-2),1);
        assert.equal(calculator.sub(1,-2),3);
   }) ;

    it("should multiply two numbers", function(){
      
       assert.equal(calculator.mult(1,2),2);
       assert.equal(calculator.mult(-1,-2),2);
        assert.equal(calculator.mult(1,-2),-2);
        assert.equal(calculator.mult(-1,2),-2);
   }) ;
    
     it("should divide two numbers", function(){
      
       assert.equal(calculator.div(1,2),0.5);
       assert.equal(calculator.div(-1,-2),0.5);
        assert.equal(calculator.div(1,-2),-0.5);
        assert.equal(calculator.div(-1,2),-0.5);
   }) ;
    
});

    var checker = require("../calc.js");

describe("last number same checker", function(){

    it("should check the last digit of two numbers", function(){
        assert.equal(checker.check(01,11),true);
        assert.equal(checker.check(-1,11),true);
        assert.equal(checker.check(1.0,11),true);
        assert.equal(checker.check(1,11.0),true);
    });
     
});