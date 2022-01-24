const d = document,
  $formReg = d.querySelector('#form-reg'),
  $emailLabel = d.querySelector('.mb-3.mt-5'),
  $passInputs = d.querySelectorAll('[data-pass]');

export const rePass = (e)=> {

  if ($formReg.password.value !== $formReg.rePassword.value) {
    e.preventDefault()
    $emailLabel.insertAdjacentHTML('afterbegin',`<p class="alert alert-danger">Las contraseñas no coinciden</p>`)
    $passInputs.forEach(el =>{
      el.classList.add('is-invalid')
    })
  }
}