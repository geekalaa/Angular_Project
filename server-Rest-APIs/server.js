const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const multer = require('multer');
const path = require('path');
var cors = require('cors');
const PATH = './uploads';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, PATH);
    },
    filename: (req, file, cb) => {
        //console.log(file);
        //console.log(file.path);

      cb(null, file.originalname);
    }
  });

  let upload = multer({
    storage: storage
  });



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


app.post('/upload', upload.single('image'), function (req, res) {
    if (!req.file) {
      console.log("No file is available!");
      return res.send({
        success: false
      });
  
    } else {
      console.log('File is available!');
      return res.send({
        success: true
      })
    }
  });


// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});