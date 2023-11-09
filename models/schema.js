const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * @typedef {Object} BookMovieTicket
 * @property {String} movie - The name of the movie for which the ticket is booked.
 * @property {String} slot - The time slot for the movie.
 * @property {Object} seats - The details of the booked seats.
 * @property {String} seats.A1 - The status of seat A1.
 * @property {String} seats.A2 - The status of seat A2.
 * @property {String} seats.A3 - The status of seat A3.
 * @property {String} seats.A4 - The status of seat A4.
 * @property {String} seats.D1 - The status of seat D1.
 * @property {String} seats.D2 - The status of seat D2.
 */

/**
 * Represents a schema for storing movie booking details.
 * @type {mongoose.Schema<BookMovieTicket>}
 */
const bookMovieTicketSchema = new Schema({
    movie: { type: String, required: true },
    slot: { type: String, required: true },
    seats: {
        A1: { type: String, required: true },
        A2: { type: String, required: true },
        A3: { type: String, required: true },
        A4: { type: String, required: true },
        D1: { type: String, required: true },
        D2: { type: String, required: true }
    }
});

/**
 * Mongoose model for storing movie booking details.
 * @name BookTicketModel
 * @type {mongoose.Model<BookMovieTicket>}
 */
module.exports = mongoose.model('booktickets', bookMovieTicketSchema);

 
