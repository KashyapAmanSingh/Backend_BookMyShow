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

## API Reference

### Base URL

- https://backend-book-my-show-pvlja8xe4-kashyapamansingh.vercel.app/

### Booking

- `GET /api/bookings`: Returns a list of all bookings stored in the database in JSON format.
- `POST /api/bookings`: (Provide details of required parameters if any)

# Deployment

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
 
  
