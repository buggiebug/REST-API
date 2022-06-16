require("dotenv").config();
const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT;
const host = process.env.HOSTNAME;

const dbConnect = require("./database/dbConnect");
dbConnect();

// Importing routes...
app.use(require("./routes/signup"));
app.use(require("./routes/login"));
app.use(require("./routes/users"));
app.use(require("./routes/getUserDetails"));

app.get("/",(req,res)=>{
    res.send("Hello World !");
});



app.listen(port,()=>{console.log(`server run at http://${host}:${port}`)});