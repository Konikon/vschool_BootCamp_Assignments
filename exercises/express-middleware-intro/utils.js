function explosion(req, res, next){
  req.explode = "BOOM!!!!"
  next();
}

module.exports = {
  explosion
}
