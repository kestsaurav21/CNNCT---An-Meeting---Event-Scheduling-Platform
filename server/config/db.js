const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODE_URI);
        console.log('Connected to MongoDB successfully');
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;