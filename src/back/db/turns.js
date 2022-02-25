require('./connection')
const CalendarTurn = require("../models/calendarModel");

const saveTurn = async (req)=>{
  try{

    const calendarTurn = new CalendarTurn(req.body)
    const turnSaved = await calendarTurn.save()

    if (turnSaved) return {completed: "saved" };


  }catch(error){
    console.log(error)
  }
} 

const validateTurn = async (req)=>{
  try{

    const {dateFrom, dateTo} = req.body;
    console.log(dateFrom, dateTo)
    const dateFromMs = new Date(dateFrom).getTime(),
      dateToMs = new Date(dateTo).getTime();


  if (dateToMs < dateFromMs) return {completed: "dateTo is lower"};

  }catch(error){
    console.log(error)
  }

}

module.exports = {saveTurn, validateTurn}