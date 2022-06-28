const express = require("express");
cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 3002;

// SET UP

mongoose.connect("mongodb://localhost:27017/final-project");

const LOCATIONS = mongoose.model("locations", {
    city: String,
    country: String,
    description: String,
    img: String,
    from: String,
    to: String,
    lat: Number,
    lng: Number
})

const USERS = mongoose.model("users", {
    name: String,
    password: String
})
app.use(cors())
app.use(express.json());

// LOCATION ENTRIES

app.post("/locations", async (req, res) => {
    const dataToInsertIntoDB = new LOCATIONS({
        city: req.body.city,
        country: req.body.country,
        description: req.body.description,
        img: req.body.img,
        from: req.body.from,
        to: req.body.to,
        lat: req.body.lat,
        lng: req.body.lng

    });
    await dataToInsertIntoDB.save();
  
    const data_in_locations_collection = await LOCATIONS.find();
    res.send(data_in_locations_collection);
  });

// REGISTER ENTRIES

app.post("/register", async (req, res) => {
    const dataToInsertIntoDB = new USERS({
        name: req.body.name,
        password: req.body.password

});
await dataToInsertIntoDB.save();

const data_in_users_collection = await USERS.find();
res.send(data_in_users_collection);
});

// LOGIN INTRIES

app.post("/login", async (req, res) => {
    const usersData = await USERS.find({
        name: req.body.loginName,
      });
    res.send(JSON.stringify(usersData))
});

// GET LOCATIONS ROUTE

async function getLocations(res) { 
    const data_in_locations_collection = await LOCATIONS.find(); 
    res.send(data_in_locations_collection); 
}

app.get("/locations", async (req, res) => {
    getLocations(res);
});

// REST

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
