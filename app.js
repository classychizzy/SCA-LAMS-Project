const express = require('express');
const  mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Mongodb connection string
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) throw err;
        else console.log('connected to db!')
    });

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
})

module.exports = app;