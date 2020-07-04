const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// schema for the user
const Schema = mongoose.Schema;
const UserDetail = new Schema({
  username: String,
  password: String,
  email: String
});

UserDetail.plugin(passportLocalMongoose);
const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');