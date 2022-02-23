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
    }else{
      day = e.target.children.textContent
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
    dayComplete = {
      dateFrom: new Date(`${year}-${month}-${day} ${hourFrom.value}`),
      dateTo: new Date(`${year}-${month}-${day} ${hourTo.value}`)
    },
    $alertIncorrect = d.createElement('p');

    $alertIncorrect.setAttribute('class','alert alert-danger alert-hour');
    $alertIncorrect.setAttribute('data-alert', btnNumber);
    $alertIncorrect.textContent = 'El horario es incorrecto';

    const res = await fetch(`/day`,
      {
        method: 'POST',
        body: JSON.stringify(dayComplete),
        headers: {'Content-Type': 'application/json'}
      });
    const json = await res.json()

    console.log($alertExistent)

    if (json.completed === 'dateTo is lower' && $alertExistent === null) {
      hourFrom.classList.add('incorrectDate')
      hourTo.classList.add('incorrectDate')
      e.target.parentElement.after($alertIncorrect);
    }
}