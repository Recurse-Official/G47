const express = require('express')
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get('/',(req, res) =>{
  res.render("home.ejs");
})
app.get("/about",(req,res)=>{
    res.render("about.ejs");
} )
app.get("/service", (req,res)=>{
    res.render("service.ejs");
})
app.get("/contact", (req,res)=>{
    res.render("contact.ejs");
})

app.listen(3000, ()=>{
    console.log("Server is listening");
})
