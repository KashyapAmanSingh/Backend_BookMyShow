# Backend BookMyShow

Hello viewers, this is the backend part of the capstone project of the backend module named Backend_BookMyShow.

## Installation

To run the backend part of the application, follow these steps:

1. Clone the repository to your local machine.
 https://github.com/KashyapAmanSingh/Backend_BookMyShow


2. Navigate to the backend directory.
cd back_Show

3. Install the required dependencies.
npm install


4. Start the development server.
node server.js


This will start the backend application using Express, Node.js, and MongoDB, enabling you to access it at http://localhost:8080.

## Schema Docs--- This is the documentation of the schema for movie bookings

 * @typedef {Object} BookMovieTicket * @property {String} movie - The name of the movie for which the ticket is booked.
 * @property {String} slot - The time slot for the movie.
 * @property {Object} seats - The details of the booked seats.
 * @property {String} seats.A1 - The status of seat A1.
 * @property {String} seats.A2 - The status of seat A2.
 * @property {String} seats.A3 - The status of seat A3.
 * @property {String} seats.A4 - The status of seat A4.
 * @property {String} seats.D1 - The status of seat D1.
 * @property {String} seats.D2 - The status of seat D2.
 */

 
 * Represents a schema for storing movie booking details.
 * @type {mongoose.Schema<BookMovieTicket>}
  Mongoose model for storing movie booking details.
 * @name BookTicketModel



## API Reference

### Base URL

- https://backend-book-my-show-pvlja8xe4-kashyapamansingh.vercel.app/

### Booking

- `GET /api/bookings`: Returns a list of all bookings stored in the database in JSON format.
- `POST /api/bookings`: (Provide details of required parameters if any)

# Deployment
![live Ui](https://github.com/KashyapAmanSingh/Backend_BookMyShow/assets/119684617/11935ac4-da63-490b-8890-3eceb19d5dd8)

Here is the link to the deployed project for the backend:

- For Backend:  https://backend-book-my-show-pvlja8xe4-kashyapamansingh.vercel.app/

# Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

- `MONGODBURI`: MongoDB live connection string
- `COLLECTION_NAME`: Name of the MongoDB collection
- `APP_PORT`: Port number for the application
- `GET_REQUEST`: API route for GET requests
- `POST_REQUEST`: API route for POST requests
- `API_KEY`: MongoDB cluster connect key

## Tech Stack

- Server: Node, Express
- Database: MongoDB
 
  ## worked Individually

