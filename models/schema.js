const mongoose = require('mongoose');
const { Schema } = mongoose;

// Created a new schema for pushing movie booking details.
const bookMovieTicketSchema = new Schema({
    movie: { type: String },
    slot: { type: String },
    seats: {
        A1: { type: String  },
        A2: { type: String  },
        A3: { type: String  },
        A4: { type: String  },
        D1: { type: String  },
        D2: { type: String  }
    }

})


module.exports =  mongoose.model('booktickets', bookMovieTicketSchema);
 