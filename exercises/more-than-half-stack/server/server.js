const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid/v4");

const port = process.env.PORT || 8010;
const morgan = require("morgan");

const bountiesRoutes = require("./routes/bounties")
// const SithRoutes = require("./routes/SithBounties")

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
// app.use("/SithBounties", SithRoutes);
app.use("/bounties", bountiesRoutes);


app.listen(port, () => {
  console.log(`Server is serving port ${port}`);
});
