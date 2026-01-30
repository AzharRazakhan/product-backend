const mongoose = require('mongoose');
require('dotenv').config();


const connect = async() => {
   await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connect')
}


module.exports = connect;