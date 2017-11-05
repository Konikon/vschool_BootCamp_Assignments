const express = require("express");
const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");

const PORT = process.env.PORT || 4000;

const url = "https://www.smithsfoodanddrug.com/search?query=cheese&page=2&tab=0"
// var items = [];
request(url, (err, res, body)=>{
  if(err){
    let $ = cheerio.load(body);
    $(".ProductCard-name").each((index, title)=>{
      console.log($(title).text());
    });
  }

  // if(!err){
  //   var $ = cheerio.load(body);
  //   $(".ProductCard-name").each(()=>{
  //     var item = $(this).text();
  //     items.push(item);
    // });
    // console.log(items);
  // }

});

// app.listen(PORT, ()=>{
//   console.log("server is running on port " + PORT);
// })
//
// exports = module.exports = app;
