const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// creates express erver
const app = express();
const port = process.env.PORT || 5000;

//cors middleware
app.use(cors());

// allows us to parse json
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB databse connection established successfully");
})

const booksRouter = require('./routes/books');

app.use('/books', booksRouter);

// listens 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});