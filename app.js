const express = require('express')
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Organization = require("./models/organization.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/donorData";
mongoose.connect(MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Database connection error:", err));

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get('/',(req, res) =>{
  res.render("home.ejs");
});
app.get("/about",(req,res)=>{
    res.render("about.ejs");
});
app.get("/service", (req,res)=>{
    res.render("service.ejs");
});
app.get("/contact", (req,res)=>{
    res.render("contact.ejs");
});
app.get("/donate", (req,res)=>{
    res.render("donate.ejs");
});
app.get("/receive", async (req, res) => {
    try {
      const organizations = await Organization.find(); // Fetch all organizations from the database
      res.render("receive", { organizations }); // Pass data to the EJS template
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  
app.get("/donate/register", (req,res)=>{
    res.render("donate-reg.ejs");
});
app.get("/receive/register", (req,res)=>{
    res.render("receive-reg.ejs");
});
app.post("/submit/donor", async (req, res) => {
    try {
      const data = {
        organizationType: req.body.organizationType,
        organizationDetails: {
          orgName: req.body.orgName,
          contactPerson: req.body.contactPerson,
          email: req.body.email,
          phone: req.body.phone,
        },
        locationDetails: {
          address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          pincode: req.body.pincode,
          capacity: req.body.capacity,
          typicalTimings: req.body.typicalTimings,
        },
        foodAndSafety: {
          foodTypes: req.body.foodTypes || [],
          licenses: req.body.licenses || [],
        },
        accountDetails: {
          password: req.body.password,
        },
      };
  
      const newOrganization = new Organization(data);
      await newOrganization.save();
  
      res.status(200).redirect("/");
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  
app.listen(8080, ()=>{
    console.log("Server is listening");
});
