const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const dummyDatabase = ["Donovan Mitchell", "Jordan Clarkson", "Mike Conley", "Bojan Bogdonavic", "Patrick Beverley", "Walker Kessler"];

// Let's prep our food/response to send back
app.get("/api/get", (req, res) => {
    // Console log to confirm we hit the endpoint
    console.log("Endpoint hit");
    // SEND THE DATA BACK
    res.status(200).send(dummyDatabase);
})

app.post("/api/post", (req, res) => {
    // Console log to confirm we hit the endpoint
    console.log("Post endpoint hit");
    // I need to add the incoming data to my database
    // Let's first confirm we are getting data on our request
    console.log(req.body);
    console.log(req.body.nbaPlayer);
    // Add some data to our "database"
    dummyDatabase.push(req.body.nbaPlayer);
    // SEND THE DATA BACK
    res.status(200).send(dummyDatabase[dummyDatabase.length - 1]);
})

app.listen(4004, () => console.log("Hello world on 4004"));