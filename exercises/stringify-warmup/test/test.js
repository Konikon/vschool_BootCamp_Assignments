// should
const chai = require("chai");
const assert = chai.assert;

const stringifyUrl = require("../main.js");

let tests = {
  endpoint: "http://localhost:8080/monkeys",
  case0: {},
  case1: {
    species: "howler"
  },
  case2: {
    species: "gorilla",
    color: "black"
  }
}


describe("A function that convert object to string", () => {
  it("should return endpoint back if no query obj", () => {
      assert.equal(stringifyUrl(tests.endpoint, tests.case0), tests.endpoint)
  });

  it("should return url query string with species", () => {
      assert.equal(stringifyUrl(tests.endpoint, tests.case1),"http://localhost:8080/monkeys?species=howler")
  });

  it("should return url query string with species and howler", () => {
      assert.equal(stringifyUrl(tests.endpoint, tests.case2),"http://localhost:8080/monkeys?species=howler&color=black")
  })
})
