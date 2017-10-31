const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const issueRoutes = require("./routes/issue");

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/issues", issueRoutes)


mongoose.connect("mongodb://localhost/issue", (err)=>{
  if (err) throw err;
  console.log("connected to the database");
});

app.listen(PORT, ()=>{
  console.log("server is running on port " + PORT);
})
