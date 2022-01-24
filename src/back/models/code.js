const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;

const userCode = new Schema({
  codigo: String
})

module.exports = mongoose.model('codes', userCode);