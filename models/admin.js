const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// schema for the user
const Schema = mongoose.Schema;
const AdminDetail = new Schema({
  username: String,
  password: String,
  email: String
});

AdminDetail.plugin(passportLocalMongoose);
const UserDetails = mongoose.model('AdminInfo', AdminDetail, 'AdminInfo');