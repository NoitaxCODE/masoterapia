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

  const {year, month, day, hourFrom, hourTo} = req.body,  
    dateFrom = Date.parse(year+'-'+month+'-'+day+' '+hourFrom),
    dateTo = Date.parse(year+'-'+month+'-'+day+' '+hourTo);

  if (dateTo < dateFrom) console.log("Es menor");
  if (dateTo < dateFrom) return {completed: "dateTo is lower"};

  }catch(error){
    console.log(error)
  }

}

module.exports = {saveTurn, validateTurn}