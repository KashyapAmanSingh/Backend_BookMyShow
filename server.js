const express = require("express");
const app = express();
 
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToMongo = require("./connection");
const router = require("./controllers/route")
const port = 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

 connectToMongo();
 
 // app.use("/", router);

// listening backend on a port.
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;

