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

    const {date, dateFrom, dateTo} = req.body,
      dateSend = new Date(`${date}`),
      dateFinded = await CalendarTurn.find({date:dateSend}),
      timeFrom = new Date(dateFrom).getTime(),
      timeTo = new Date(dateTo).getTime();
    let turnBusy = false;

      dateFinded.map(el => {
        let timeFromDB = el.dateFrom.getTime(),
          timeToDB = el.dateTo.getTime();
        
      if (timeFrom>timeFromDB && timeFrom<timeToDB || timeTo>timeFromDB && timeTo<timeToDB) turnBusy = true;
          
      });

      if (turnBusy) return {completed: "turn is busy", error: true}

  }catch(error){
    console.log(error)
  }

}

const dateFromDB = async (req)=>{
  try {
    const {year, month, day} = req.body,
      date = new Date(`${year}, ${month}, ${day}`)

    const dateFinded = await CalendarTurn.find({date})

    if (dateFinded.length === 0) return {completed: "turn not found"}

    return dateFinded

  } catch (error) {
    console.error(error)
  }
}

module.exports = {saveTurn, validateTurn, dateFromDB}