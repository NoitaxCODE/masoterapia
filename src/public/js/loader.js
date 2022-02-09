const d = document,
      w = window,
      $ico = d.createElement('div');

$ico.setAttribute('class', 'spinner-border text-primary')
$ico.classList.add('loader')
$ico.setAttribute('role', 'status')
$ico.innerHTML = '<span class="visually-hidden">Loading...</span>'

export const loader = (e)=>{
  if (e.target.matches('.btn_update') || e.target.matches('.refresh') || e.target.matches('.refresh-text')){

    $ico.setAttribute('data-cargarPacientes', '')
    $ico.setAttribute('class', 'spinner-border text-success')
    
    setTimeout(()=>{
  
      document.querySelector('.btn_update').replaceWith($ico)

    },10)
  }else if (e.target.matches('.btn-code')){
    setTimeout(()=>{
      $ico.classList.add('loader-code')
      document.querySelector('.btn-code').replaceWith($ico)

    },10)
  }else if(e.target.matches('.save') && e.target.matches('.saveBtn')){
    setTimeout(()=>{
      $ico.classList.add('spinnerSave')
      e.target.replaceWith($ico)
    },10)
  }else{

    setTimeout(()=>{
  
      e.target.parentNode.replaceChild($ico, e.target.parentNode.children[1])

  
    },10)

  }

}

