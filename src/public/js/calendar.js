const d = document,
  w = window;

const completeCalendar = (daysOfMonth, year, month)=>{

  let $dayList = d.querySelector('#dayList'),
    $days = d.querySelectorAll('.day');

  $days.forEach( el=>{
    el.remove();
  })

  for (let i = 0; i < daysOfMonth; i++) {
    if (i===0){
      $dayList.insertAdjacentHTML('beforeend', `<li class="day day-first"><p class="day-text">${i+1}</p></li>`)
    }else{
      $dayList.insertAdjacentHTML('beforeend', `<li class="day"><p class="day-text">${i+1}</p></li>`)
    }
  }

  let $firstDay = d.querySelector('.day-first'),
    currentDate = new Date(year, month, 1);
    console.log(currentDate.getDay())
    
  $firstDay.style.gridColumnStart = `${currentDate.getDay()}`

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