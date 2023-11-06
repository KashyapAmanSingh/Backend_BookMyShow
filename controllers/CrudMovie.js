const bookMovieTicketSchema = require("../models/schema");

// Function to fetch the latest booking
async function fetchLatestBooking() {
  try {
    const myData = await bookMovieTicketSchema
      .find()
      .sort({ _id: -1 })
      .limit(1); //fetch from last & latest data of docs
    if (myData.length === 0) {
      return { data: null, message: "No previous Booking found!" };
    } else {
      return { data: myData[0] };
    }
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred");
  }
}

// Function to post a new booking
async function PostLatestBooking(req, res) {
  const { movie, slot, seats } = req.body;
  const myData = new bookMovieTicketSchema({ movie, slot, seats }); //do post method to store upcoming data of booked movie into the dbs
  const saved = await myData.save();
  return saved;
}

module.exports = { fetchLatestBooking, PostLatestBooking };
