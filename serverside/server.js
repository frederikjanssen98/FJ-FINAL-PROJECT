const express = require("express");
cors = require('cors')
const mongoose = require('mongoose');
const app = express();
const PORT = 3002;


mongoose.connect("mongodb://localhost:27017/final-project");

const LOCATIONS = mongoose.model("locations", {
    city: String,
    country: String,
    description: String,
    img: String,
    from: String,
    to: String,
})
app.use(cors())
app.use(express.json());


app.post("/locations", async (req, res) => {
    const dataToInsertIntoDB = new LOCATIONS({
        city: req.body.city,
        country: req.body.country,
        description: req.body.description,
        img: req.body.img,
        from: req.body.from,
        to: req.body.to

    });
    await dataToInsertIntoDB.save();
  
    const data_in_database = await LOCATIONS.find();
    res.send(data_in_database);
  });

async function getLocations(res) { 
    const data_in_database = await LOCATIONS.find(); 
    res.send(data_in_database); 
}

app.get("/locations", async (req, res) => {
    getLocations(res);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
