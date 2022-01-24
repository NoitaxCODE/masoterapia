const d = document,
  w = window,
  $sex = d.querySelectorAll('[data-sex]')


export const ocultarGenero = (e) =>{
  if (e.target.value === 'Masculino'){
    $sex.forEach(el=>{
      el.style.visibility = 'hidden';
      el.style.display = 'none';
    })
  }else {
    $sex.forEach(el=>{
      el.style.visibility = 'visible';
      el.style.display = 'inline-block';
    })
  }

}

