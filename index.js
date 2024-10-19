const express = require("express");
const app = express();
const path = require("path");


app.use(express.urlencoded({extended : true}));


app.set("view engine", "ejs");   //for pages 
app.set("views", path.join(__dirname, "views")); //for pages  inside in views directory(folder)

app.listen(3000, () => {
    console.log("connection bn chuka h")
 });
 
 app.post("/" ,(req,res)=>{
    console.log("body" , req.body)
    res.send(req.body)
 })
 app.get("/", async(req,res)=>{
    // res.send("wow")
    res.render("index.ejs")
 })
