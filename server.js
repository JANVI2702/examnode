const express = require("express");
const path = require("path")
const db= require("./config/database")
const bodyParser = require("body-parser");
const port = 8000;
const app = express();


app.set("view engine","ejs")
app.use(express.static(path.join(__dirname + "/assets")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",require("./routers"))

app.listen(port,(err)=>{
    if(!err){
        db();
    console.log("Server is running on http://localhost:" + port);
    }
})