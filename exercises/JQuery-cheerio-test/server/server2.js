const express = require("express");
const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
const app = express();

const PORT = process.env.PORT || 4000;

const url = 'https://www.smithsfoodanddrug.com/search?query=cheese&page=2&tab=0'

app.get('/scrape', (req, res)=>{
request(url, (err, res, body)=>{
  if(err) res.send(err)
  console.log(body);
});
res.send('Check your console!')
});

app.listen(PORT, ()=>{
  console.log("server is spinning on port " + PORT);
})

exports = module.exports = app;
