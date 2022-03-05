require('./connection')
const CalendarTurn = require("../models/calendarModel");

const saveTurn = async (req)=>{
  try{
    if (req.body.error) return
    
    const calendarTurn = new CalendarTurn(req.body)
    const turnSaved = await calendarTurn.save()

    if (turnSaved) return {completed: "saved", error: false};


  }catch(error){
    console.log(error)
  }
} 

const validateTurn = async (req)=>{
  try{

    if (req.body.error === 'bad hour') return {completed: "bad hour", error: true}
    if (req.body.error === 'dateTo is lower') return {completed: "dateTo is lower", error: true};

  }catch(error){
    console.log(error)
  }

}

const dateFromDB = async (req)=>{
  try {
    const {year, month, day} = req.body,
     date = new Date(`${year}, ${month}, ${day}`)

    const dateFinded = await CalendarTurn.find({date})

    console.log(dateFinded)


  } catch (error) {
    console.error(error)
  }
}

module.exports = {saveTurn, validateTurn, dateFromDB}