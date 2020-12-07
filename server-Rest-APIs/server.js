const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require('cors');
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API application." });
});
require("./routes/routes.js")(app);
// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});