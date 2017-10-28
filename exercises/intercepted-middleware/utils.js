function adder(req,res, next){
  req.add = {
    test: "add this",
    re: 99
  }
  next();
}

module.exports = {
  adder
}
