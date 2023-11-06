const express = require("express");
const router = express.Router();
 const bookMovieTicketSchema = require('../../models/schema');
const {fetchLatestBooking,PostLatestBooking}=require('../CrudMovie')
 
const app = express();
 const bodyParser = require("body-parser");
 
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies (typically form data) with default settings.
app.use(express.json()); // Parse JSON request bodies using Express middleware.


// Create a new movie booking
router.post("/booking", async (req, res) => {
  try {
    const result = await PostLatestBooking(req);
    // Check if the result indicates a successful booking
      res.status(200).json({ data: result, message: "Booking successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ data: null, message: "Something went wrong An error occurred" });
  }
});


// Home route 
router.get("/", async (req, res) => {
  res.send("you are on the home  Page go on  /api/booking ")
})

// Get the latest booking
router.get("/booking", async (req, res) => {

  try {
    const result = await fetchLatestBooking();
    res.status(200).json(result); // Send the result back to the client as a JSON response
 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
 });

module.exports = router;