
const mongoose = require('mongoose');

const connectToMongo = async () => {
    // Connecting to database using connection string and speciying if there is any error or it was successfull
  
    mongoose
      .connect('mongodb+srv://Aman:bKyhVsfJ5Fc68F5d@cluster0.txinmx0.mongodb.net/bookticket', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        console.log('connection established with mongodb server online');
      })
      .catch((err) => {
        console.log('error while connection', err);
      });
  };

  
   module.exports =connectToMongo;

 
