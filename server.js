const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const connectToMongo = require("./connection"); // Import MongoDB connection setup
const router = require("./controllers/route/route"); // Import router for API routes
const port = 8080;
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded request bodies
app.use(bodyParser.json()); // Parse JSON request bodies
require('dotenv').config(); // Load environment variables from .env file

app.use(cors()); //

  
// Connect to MongoDB
connectToMongo(process.env.DATABASE_URL);
 

// Define API routes
app.use("/api", router);

// listening backend on a port & Start the Express server
app.listen(port, () => console.log(`App listening on port ${port}!`));

// Export the Express app

module.exports = app;
