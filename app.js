const express = require('express');
const  mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

//app configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Mongodb connection string
mongoose.connect( 
    process.env.MONGO_URI
, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("DB connected")
    });
//error handling for the connection string
const db = mongoose.connection;
db.on('error',
  console.error.bind(console, 'connection:error'));
db.once('open', () => {
  console.log(`DB connected on ${port}`)
});
  
const port = process.env.PORT || 4000;
// express server runs here
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
})

