const mongoose = require('mongoose');
const {Schema} = mongoose;

const calendarTurn = new Schema({
  dateFrom: Date,
  dateTo: Date
})

module.exports = mongoose.model('CalendarTurn', calendarTurn);