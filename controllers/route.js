const express = require("express");
const router = express.Router();
 const bookMovieTicketSchema = require('../models/schema');

 
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

 router.post("/booking", async (req, res) => {
  const { movie, slot, seats } = req.body;
  console.log(movie, slot, seats,"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ movie, slot, seatsmovie, slot, seatsmovie, slot, seats~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  const myData = new bookMovieTicketSchema({ movie, slot, seats });
  const saved = await myData.save();

  if (saved) {
    //on successfull
    res.status(200).json({ data: myData, message: "Booking successful!" });
  } else {
    //on error
    res
      .status(500)
      .json({
        data: null,
        message: "Something went wrong!. Please try again.",
      });
  }
});

router.get("/booking", async (req, res) => {
  res.send("you are on the home bro")
})
router.get("/booking", async (req, res) => {
  const myData = await bookMovieTicketSchema.find().sort({ _id: -1 }).limit(1);
 
 
  if (myData.length === 0) {
     res.status(200).json({ data: null, message: "No previous Booking found!" });
  } else {
     res.status(200).json({ data: myData[0] });
  }
});

module.exports = router;