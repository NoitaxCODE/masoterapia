const d = document,
  w = window;

const completeCalendar = (daysOfMonth, year, month)=>{

  let $dayList = d.querySelector('#dayList'),
    $days = d.querySelectorAll('.day-link');

  $days.forEach( el=>{
    el.remove();
  })

  for (let i = 0; i < daysOfMonth; i++) {
    if (i===0){
      $dayList.insertAdjacentHTML('beforeend', `<a href="#day-selected" class="day-first day-link"><li class="day"><p class="day-text">${i+1}</p></li></a>`)
    }else{
      $dayList.insertAdjacentHTML('beforeend', `<a href="#day-selected" class="day-link"><li class="day"><p class="day-text">${i+1}</p></li></a>`)
    }
  }

  let $firstDay = d.querySelector('.day-first'),
    currentDate = new Date(year, month, 1),
    firstDayMove;

    if (currentDate.getDay() === 0){
      firstDayMove = 7
    }else{
      firstDayMove = currentDate.getDay()
    };
    
  $firstDay.style.gridColumnStart = `${firstDayMove}`;

}

export const getDays = (e)=>{
  const calendar = d.querySelector(".bg-calendar")

  if (calendar){
    let year = new Date().getFullYear(),
    month = new Date().getMonth(),
    daysOfMonth = new Date(year, month+1, 0).getDate(),
    $year = d.querySelector(".year"),
    $month = d.querySelector('#currentMonth');


    $year.textContent = year;
    $month.setAttribute('data-day', `${month}`)
    
    switch (month) {
      case 0:
        $month.textContent = 'Enero'
        break;
      case 1:
        $month.textContent = 'Febrero'
        break;
      case 2:
        $month.textContent = 'Marzo'
        break;
      case 3:
        $month.textContent = 'Abril'
        break;
      case 4:
        $month.textContent = 'Mayo'
        break;
      case 5:
        $month.textContent = 'Junio'
        break;
      case 6:
        $month.textContent = 'Julio'
        break;
      case 7:
        $month.textContent = 'Agosto'
        break;
      case 8:
        $month.textContent = 'Septiembre'
        break;
      case 9:
        $month.textContent = 'Octubre'
        break;
      case 10:
        $month.textContent = 'Noviembre'
        break;
      case 11:
        $month.textContent = 'Diciembre'
        break;
    }

    completeCalendar(daysOfMonth, Number($year.textContent), month)
    

  }
}

export const changeMonth = (e)=>{
  let $month = d.querySelector('#currentMonth'),
    currentMonth = Number($month.getAttribute('data-day'));

    if(e.target.matches('#ctrl-calendar-left') && currentMonth >= 1){
      currentMonth -= 1
      $month.setAttribute('data-day',`${currentMonth}`)
    }else if(e.target.matches('#ctrl-calendar-right') && currentMonth <= 10){
      currentMonth += 1
      $month.setAttribute('data-day',`${currentMonth}`)
    }

  switch (currentMonth) {
    case 0:
      $month.textContent = 'Enero'
      break;
    case 1:
      $month.textContent = 'Febrero'
      break;
    case 2:
      $month.textContent = 'Marzo'
      break;
    case 3:
      $month.textContent = 'Abril'
      break;
    case 4:
      $month.textContent = 'Mayo'
      break;
    case 5:
      $month.textContent = 'Junio'
      break;
    case 6:
      $month.textContent = 'Julio'
      break;
    case 7:
      $month.textContent = 'Agosto'
      break;
    case 8:
      $month.textContent = 'Septiembre'
      break;
    case 9:
      $month.textContent = 'Octubre'
      break;
    case 10:
      $month.textContent = 'Noviembre'
      break;
    case 11:
      $month.textContent = 'Diciembre'
      break;
  }
}

export const changeYear = (e)=>{

  let $year = d.querySelector(".year"),
    currentYear = Number($year.textContent);
  
  if(e.target.matches('#ctrl-year-left') && currentYear > 0){
    currentYear -= 1
  }else if(e.target.matches('#ctrl-year-right')){
    currentYear += 1
  }
  $year.textContent = `${currentYear}`

  let $month = Number(d.querySelector('#currentMonth').getAttribute('data-day')),
      daysOfMonth = new Date(currentYear, $month+1, 0).getDate();

  completeCalendar(daysOfMonth, currentYear, $month)
}

export const newMonth = (e)=>{
  let $year = Number(d.querySelector('.year').textContent),
    $month = Number(d.querySelector('#currentMonth').getAttribute('data-day')),
    daysOfMonth = new Date($year, $month+1, 0).getDate();

  completeCalendar(daysOfMonth, $year, $month)
  

}

export const openDay = (e)=>{
  let day,
    month = Number(d.querySelector('#currentMonth').getAttribute('data-day')) +1,
    year = d.querySelector('.year').textContent,
    daySelected = d.querySelector('#day-selected'),
    $hourSelected = d.querySelector('#hour-selected'),
    newDaySelected = d.createElement('ol');

    if (e.target.matches('.day-text')){
      day = e.target.textContent
    }else if(e.target.matches('.day')){
      day = e.target.children[0].textContent
    }else{
      day = e.target.children[0].children[0].textContent
    }

    if($hourSelected) $hourSelected.remove();

    newDaySelected.setAttribute('id','day-selected');
    newDaySelected.setAttribute('class','day-selected');
    newDaySelected.innerHTML = 
      ` <li class="day-selected-header">
          <h2 class="day-selected-title" data-day='${day}'>${day}/${month}/${year}</h2>
          <a href="#hour-selected"><img class="day-selected-edit" src=".././img/ico/btnEdit.svg"/></a>
        </li>
        <li class="day-selected-hour">00 HS</li>
        <li class="day-selected-hour">01 HS</li>
        <li class="day-selected-hour">02 HS</li>
        <li class="day-selected-hour">03 HS</li>
        <li class="day-selected-hour">04 HS</li>
        <li class="day-selected-hour">05 HS</li>
        <li class="day-selected-hour">06 HS</li>
        <li class="day-selected-hour">07 HS</li>
        <li class="day-selected-hour">08 HS</li>
        <li class="day-selected-hour">09 HS</li>
        <li class="day-selected-hour">10 HS</li>
        <li class="day-selected-hour">11 HS</li>
        <li class="day-selected-hour">12 HS</li>
        <li class="day-selected-hour">13 HS</li>
        <li class="day-selected-hour">14 HS</li>
        <li class="day-selected-hour">15 HS</li>
        <li class="day-selected-hour">16 HS</li>
        <li class="day-selected-hour">17 HS</li>
        <li class="day-selected-hour">18 HS</li>
        <li class="day-selected-hour">19 HS</li>
        <li class="day-selected-hour">20 HS</li>
        <li class="day-selected-hour">21 HS</li>
        <li class="day-selected-hour">22 HS</li>
        <li class="day-selected-hour">23 HS</li>`;



  if (daySelected){
    daySelected.replaceWith(newDaySelected)
  }else{
    d.querySelector('main').insertAdjacentElement('beforeend', newDaySelected)
  }
  
}

export const editDay = (e)=>{
  let $newHourSelected = d.createElement('div'),
    $hourSelected = d.querySelector('#hour-selected');

  $newHourSelected.setAttribute('id','hour-selected');
  $newHourSelected.setAttribute('class','hour-selected');
  $newHourSelected.innerHTML = 
  ` <label>Cuantos turnos desea agregar?
      <input type="number" id="quantityOfTurns" />
    </label>
    <button class="btn btn-sm btn-turn">Agregar</button>`

  if ($hourSelected){
    $hourSelected.replaceWith($newHourSelected)
  }else{
    d.querySelector('main').insertAdjacentElement('beforeend', $newHourSelected)
  }
}

export const addTurn = (e)=>{
  let $newTurn = d.createElement('div'),
    $hourSelected = d.querySelector('#hour-selected'),
    quantityOfTurns = d.querySelector('#quantityOfTurns').value,
    $fragment = d.createDocumentFragment();

  $newTurn.setAttribute('class','hour-selected-setHourContainer');
  $newTurn.innerHTML = 
  `      
  <label>Desde:<input class="desde-input" type="time"/></label>
  <label>Hasta:<input class="hasta-input"type="time"/></label>
  <button class="btn btn-sm btn-setHour">Agendar</button>
  `

  for (let i = 1; i <= quantityOfTurns; i++) {
    $newTurn.querySelector('.desde-input').setAttribute(`data-from-${i}`, '')
    $newTurn.querySelector('.hasta-input').setAttribute(`data-to-${i}`, '')
    $newTurn.querySelector('.btn-setHour').setAttribute(`data-btnSetHour`, `${i}`)

    let $clone = d.importNode($newTurn, true)
    $fragment.appendChild($clone)
  }
  $hourSelected.append($fragment)

  w.scrollBy({
    top: w.innerHeight,
    left: 0,
    behavior: 'smooth'

  })
}

export const setHour = async (e)=>{
  
  let btnNumber = e.target.getAttribute('data-btnSetHour'),
    hourFrom = d.querySelector(`[data-from-${btnNumber}]`),
    hourTo = d.querySelector(`[data-to-${btnNumber}]`),
    year = d.querySelector('.year').textContent,
    month = (Number(d.querySelector('#currentMonth').getAttribute('data-day')) + 1).toString(),
    day = d.querySelector('.day-selected-title').getAttribute('data-day'),
    $alertExistent = d.querySelector(`[data-alert="${btnNumber}"]`),
    $replaceSpinner = d.createElement('div'),
    $replaceSaved = d.createElement('div'),
    dayComplete;

    $replaceSpinner.setAttribute('class','hour-selected-setHourContainer');
    $replaceSpinner.setAttribute('data-containerHour',`${btnNumber}`);
    $replaceSpinner.innerHTML = 
    `      
    <label>Desde:<input class="desde-input" type="time" data-from-${btnNumber}/></label>
    <label>Hasta:<input class="hasta-input"type="time" data-to-${btnNumber}/></label>
    <button class="btn btn-sm btn-setHour" data-btnSetHour="${btnNumber}" >Agendar</button>
    `

    $replaceSaved.classList.add('container-succes')
    $replaceSaved.innerHTML = 
    `
      <div class="container-succes-circle">
        <div class="container-succes-circle-check"></div>
      </div>
      <p>Agendado Correctamente</p>
    `


    if (hourFrom.value === '' || hourTo.value === ''){
      dayComplete = {
        error: "bad hour"
      }
    }else if(hourFrom.value >= hourTo.value){
      dayComplete = {
        error: "dateTo is lower"
      }
    }else{
      dayComplete = {
        date: new Date(`${year}-${month}-${day}`),
        dateFrom: new Date(`${year}-${month}-${day} ${hourFrom.value}`),
        dateTo: new Date(`${year}-${month}-${day} ${hourTo.value}`)
      }
    }

    const res = await fetch(`/day`,
      {
        method: 'POST',
        body: JSON.stringify(dayComplete),
        headers: {'Content-Type': 'application/json'}
      });
    const json = await res.json()
    
    setTimeout(() => {

      if (json.completed === 'saved'){

        d.querySelector(`[data-spinner='${btnNumber}']`).replaceWith($replaceSaved)
        
      }else if(json){

        d.querySelector(`[data-spinner='${btnNumber}']`).replaceWith($replaceSpinner)
      } 
    
      let $alertIncorrect = d.createElement('p'),
      $contentAlert;

      switch (json.completed) {
        case 'bad hour':
          $contentAlert = 'El horario no puede estar vacio'
          break;
        case 'dateTo is lower':
          $contentAlert = 'El horario final no puede ser menor al inicial'
          break;
      } 
      $alertIncorrect.setAttribute('class','alert alert-danger alert-hour');
      $alertIncorrect.setAttribute('data-alert', btnNumber);
      $alertIncorrect.textContent = `${$contentAlert}`;

      let hourFrom = d.querySelector(`[data-from-${btnNumber}]`),
        hourTo = d.querySelector(`[data-to-${btnNumber}]`);

      if (json.error && $alertExistent === null) {
        hourFrom.classList.add('incorrectDate')
        hourTo.classList.add('incorrectDate')
        hourTo.parentElement.parentElement.after($alertIncorrect);
      }else if(json.error && $alertExistent && json.completed === 'bad hour'){
        hourFrom.classList.add('incorrectDate')
        hourTo.classList.add('incorrectDate')
        d.querySelector(`[data-alert="${btnNumber}"]`).textContent = `El horario no puede estar vacio`;
      }else if(json.error && $alertExistent && json.completed === 'dateTo is lower'){
        hourFrom.classList.add('incorrectDate')
        hourTo.classList.add('incorrectDate')
        d.querySelector(`[data-alert="${btnNumber}"]`).textContent = `El horario final no puede ser menor al inicial`;
      }else if(json.completed === 'saved' && $alertExistent){
        hourFrom.classList.remove('incorrectDate')
        hourTo.classList.remove('incorrectDate')
        $alertExistent.remove();
      }
    }, 20);
}

export const importDay = async (e)=>{
  try {

    let year = d.querySelector('.year').textContent,
      month = (parseInt(d.querySelector('#currentMonth').getAttribute('data-day')) + 1).toString(),
      daySelected = {
        year,
        month
      },
      target = e.target,
      hoursArray = [],
      $hours = d.querySelectorAll('.day-selected-hour');
      
    if (target.matches('.day-text')){

      daySelected.day = target.textContent

    }else if(target.matches('.day')){
      
      daySelected.day = target.children[0].textContent

    }else if(target.matches('.day-link')){

      daySelected.day = target.children[0].children[0].textContent
    }


    const res = await fetch(`/importDay`,
    {
      method: 'POST',
      body: JSON.stringify(daySelected),
      headers: {'Content-Type': 'application/json'}
    });

    const json =  await res.json()


    if (json.completed === 'turn not found') return

    json.forEach(el =>{
      let hoursFrom = new Date(el.dateFrom).getHours(),
        minutesFrom = new Date(el.dateFrom).getMinutes(),
        hoursTo = new Date(el.dateTo).getHours(),
        minutesTo = new Date(el.dateTo).getMinutes(),
        dateFrom = new Date(el.dateFrom).getTime(),
        dateTo = new Date(el.dateTo).getTime(),
        dateDif = ((dateTo-dateFrom)/1000)/60;
      
      if (hoursFrom < 10) hoursFrom = `0${hoursFrom}`;
      if (minutesFrom < 10) minutesFrom = `0${minutesFrom}`;
      if (hoursTo < 10) hoursTo = `0${hoursTo}`;
      if (minutesTo < 10) minutesTo = `0${minutesTo}`;

      $hours.forEach(el =>{

        if (el.textContent.slice(0,-3) == hoursFrom) el.insertAdjacentHTML('beforeend', 
          `<div class="turn-available" style="height:${dateDif*48/60}px; top:${parseInt(minutesFrom)*48/60}px">
            <p>De: ${hoursFrom}:${minutesFrom}hs</p>
            <p>A: ${hoursTo}:${minutesTo}hs</p>
          </div>`)

      })
    })
  } catch (error) {
    console.error(error)
  }
}