const mongoose = require('mongoose');
const {Schema} = mongoose;

const calendarTurn = new Schema({
  year: String,
  month: String,
  day: String,
  hourFrom: String,
  hourTo: String
})

module.exports = mongoose.model('CalendarTurn', calendarTurn);