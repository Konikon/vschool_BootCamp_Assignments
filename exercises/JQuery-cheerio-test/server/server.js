// const express = require("express");
// const request = require("request");
// const fs = require("fs");
// const cheerio = require("cheerio");
// const app = express();
//
// const PORT = process.env.PORT || 4000;
//
// app.get('/scrape', (req, res)=>{
//   url = 'http://www.imdb.com/title/tt1229340/';
//
//   request(url, (error, response, html)=>{
//     if(!error){
//       const $ = cheerio.load(html);
//       let title, release, rating;
//       let json = {title: "", release: "", rating: ""};
//
//       $('.header').filter(()=>{
//         let data = $(this);
//         title = data.children().first().text();
//         release = data.children().last().children().text();
//         json.title = title;
//         json.release = release;
//         console.log(title);
//         console.log(release);
//       })
//
//       $('.star-box-giga-star').filter(()=>{
//                let data = $(this);
//                rating = data.text();
//                 json.rating = rating;
//                 console.log(rating);
//               })
//
//     fs.writeFile('output.json', JSON.stringify(json, null, 4), (err)=>{
//
//       console.log('File successfully written! - Check your project directory for the output.json file');
// })
// }
//         res.send('Check your console!')
//
//       });
// })
//
//
//
// app.listen(PORT, ()=>{
//   console.log("server is running on port " + PORT);
// })
//
// exports = module.exports = app;
