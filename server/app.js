const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

const port = process.env.PORT || 5200;

connectDB();


app.get('/', (req, res) => {
    res.status(200).send('Server is running');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
})

