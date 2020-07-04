const express = require('express');
const  mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  });
  const Passport = require('passport');

const app = express();

//app configuration
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

//models and routes
const User = require('./models/user');// links the model for the user
const passport = require('./config/passport');
const admin = require('./models/admin');

// Mongodb connection string
mongoose.connect(process.env.MONGO_URI||'mongodb://localhost/LAMS',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true})
    .then(()=>{
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

