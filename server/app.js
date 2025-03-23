const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();

const app = express();

const port = process.env.PORT || 5200;


app.get('/', (req, res) => {
    res.status(200).send('Server is running');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
})

