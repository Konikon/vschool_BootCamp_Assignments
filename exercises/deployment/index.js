const cors = require("cors");

const settings = require("./settings");
const TestModel = require("./models/test");


app.use(bodyParser.json());
app.use(cors());
app.use(express.statis(path.resolve(__dirname, "client", "build")));

app.post("/test", (req, res)=>{
  let test = new TestModel(req.body);
  test.save((err, postedTest)=>{
    if(err){
      console.error(err);

    } else{
      res.send(postedTest);
    }
  })
})

app.get("/test", )
