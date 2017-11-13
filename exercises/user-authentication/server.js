let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let morgan = require("morgan");
let path = require("path");
let cors = require("cors");


//connect to db
mongoose.connect("mongodb://localhost/lego-auth-example");

//base express app
const app = express();

//setup cors
app.use(cors());


//setup JSON requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//setup logging
app.use(morgan("dev"));
//import routes
let legoRouter = require("./routes/routes.js")
let authRouter = require("./routes/auth.js")

//use routes
app.use("/legos", legoRouter);
app.use("/auth", authRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[+] Starting server on port ${PORT}`);
});
