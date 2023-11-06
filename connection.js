
const mongoose = require('mongoose');

const connectToMongo = async (dbs_URL) => {
    // Connecting to database using connection string and speciying if there is any error or it was successfull
 
    mongoose
      .connect(dbs_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {                                
        console.log('connection established with mongodb server online');
      })
      .catch((err) => {                         //error handling
        console.log('error while connection', err);
      });
  };

  
   module.exports =connectToMongo;

 
