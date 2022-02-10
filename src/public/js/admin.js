const d = document;


export const cargarPacientes = async (e)=>{
  try{

    const pacientes = await fetch('/cargarPacientes'),
    $btnCargar = document.createElement('div'),
    json = await pacientes.json(),
    $container = d.querySelector('#container-pacientes'),
    $fragment = d.createDocumentFragment();
    $btnCargar.setAttribute('class','btn_update');
    $btnCargar.innerHTML = `<p class="refresh-text">Cargar</p>
                            <img class="refresh" src=".././img/ico/refresh.svg">`;

    if(pacientes.status === 200) document.querySelector('[data-cargarpacientes]').replaceWith($btnCargar)

    json.forEach(el => {
      if(!el.admin){
        const $details = d.createElement('details');
        $details.classList.add('listDetails');
        $details.classList.add('listDetails-close');
        $details.classList.add('mt-3');
        $details.setAttribute('data-id',`${el._id}`)

        $details.innerHTML = `
        <div data-id-delete="${el._id}" class="trash-container">
          <div data-id-delete="${el._id}" class="trash">
            <p data-id-delete="${el._id}" class="delete-text">Borrar</p>
            <img data-id-delete="${el._id}" class="delete" data-userData src=".././img/ico/delete.svg">
          </div>
        </div>
        <div class="subtitle-admin mt-4 mb-2">
          <h3 class="userDataEdit" data-id-spiner-${el._id}>Datos Personales</h3>
          <img class="edit" data-userData src=".././img/ico/edit.svg">
        </div>
        <div class="table-responsive-sm mt-3">
          <table class="table table-striped table-hover align-middle">
            <tbody>
              <tr>
                <th data-name="nombre">Nombre:</th>
                <td class="userDataEdit" data-id-edit-${el._id}>${el.userData.nombre}</td>
              </tr>
              <tr>
                <th data-name="sexo">Sexo:</th>
                <td class="userDataEdit" data-id-edit-${el._id}>${el.userData.sexo}</td>
              </tr>
              <tr>
                <th data-name="fechaDeNacimiento">Fecha de nacimiento:</th>
                <td class="userDataEdit" data-id-edit-${el._id}>${el.userData.fechaDeNacimiento}</td>
              </tr>
              <tr>
                <th data-name="estadoCivil">Estado Civil:</th>
                <td class="userDataEdit" data-id-edit-${el._id}>${el.userData.estadoCivil}</td>
              </tr>
              <tr>
                <th data-name="ocupacion">Ocupacion:</th>
                <td class="userDataEdit" data-id-edit-${el._id}>${el.userData.ocupacion}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="subtitle-admin mt-4 mb-2">
          <h3 class="userContactEdit" data-id-spiner-${el._id}>Datos de Contacto</h3>
          <img class="edit" data-userContact src=".././img/ico/edit.svg">
        </div>
        <div class="table-responsive-sm mt-3">
          <table class="table table-striped table-hover align-middle">
            <tbody>
              <tr>
                <th data-name="domicilio">Domicilio:</th>
                <td class="userContactEdit" data-id-edit-${el._id}>${el.userContact.domicilio}</td>
              </tr>
              <tr>
                <th data-name="localidad">Localidad:</th>
                <td class="userContactEdit" data-id-edit-${el._id}>${el.userContact.localidad}</td>
              </tr>
              <tr>
                <th data-name="cp">Codigo Postal:</th>
                <td class="userContactEdit" data-id-edit-${el._id}>${el.userContact.cp}</td>
              </tr>
              <tr>
                <th data-name="telefono">Telefono:</th>
                <td class="userContactEdit" data-id-edit-${el._id}>${el.userContact.telefono}</td>
              </tr>
              <tr>
                <th data-name="email">Email:</th>
                <td class="userContactEdit" data-id-edit-${el._id}>${el.userContact.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="subtitle-admin mt-4 mb-2">
          <h3 class="userMedicosEdit" data-id-spiner-${el._id}>Datos Medicos</h3>
          <img class="edit" data-userMedicos src=".././img/ico/edit.svg">
        </div>
        <div class="table-responsive-sm mt-3">
          <table class="table table-striped table-hover align-middle">
            <tbody>
              <tr>
                <th data-name="sangre">Grupo sanguineo:</th>
                <td class="userMedicosEdit" data-id-edit-${el._id}>${el.userMedicos.sangre}</td>
              </tr>
              <tr>
                <th data-name="hijos">Hijos:</th>
                <td class="userMedicosEdit" data-id-edit-${el._id}>${el.userMedicos.hijos}</td>
              </tr>
              <tr>
                <th data-name="embarazada">Embarazada:</th>
                <td class="userMedicosEdit" data-id-edit-${el._id}>${el.userMedicos.embarazada}</td>
              </tr>
              <tr>
                <th data-name="menstruacion">Ultima menstruacion:</th>
                <td class="userMedicosEdit" data-id-edit-${el._id}>${el.userMedicos.menstruacion}</td>
              </tr>
              <tr>
                <th data-name="cirujias">Cirujias:</th>
                <td class="userMedicosEdit" data-id-edit-${el._id}>${el.userMedicos.cirujias}</td>
              </tr>
              <tr>
                <th data-name="detalles">Detalles:</th>
                <td class="userMedicosEdit" data-id-edit-${el._id}>${el.userMedicos.detalles}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="subtitle-admin mt-4 mb-2">
          <h3 class="userEnfermedadesEdit" data-id-spiner-${el._id}>Enfermedades</br> previas/existentes</h3>
          <img class="edit" data-userEnfermedades src=".././img/ico/edit.svg">
        </div>
        <div class="table-responsive-sm mt-3">
          <table class="table table-striped table-hover align-middle">
            <tbody>
              <tr>
                <th data-name="diabetes">Diabetes:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.diabetes}</td>
              </tr>
              <tr>
                <th data-name="marcapasos">Marcapasos:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.marcapasos}</td>
              </tr>
              <tr>
                <th data-name="alergias">Alergias:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.alergias}</td>
              </tr>
              <tr>
                <th data-name="asma">Asma:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.asma}</td>
              </tr>
              <tr>
                <th data-name="sida">Sida:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.sida}</td>
              </tr>
              <tr>
                <th data-name="epilepsia">Epilepsia:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.epilepsia}</td>
              </tr>
              <tr>
                <th data-name="dental">Protesis dental:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.dental}</td>
              </tr>
              <tr>
                <th data-name="lentes">Lentes de contacto:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.lentes}</td>
              </tr>
              <tr>
                <th data-name="hipotenso">Hipotenso:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.hipotenso}</td>
              </tr>
              <tr>
                <th data-name="hipertenso">Hipertenso:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.hipertenso}</td>
              </tr>
              <tr>
                <th data-name="hepatitis">Hepatitis:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.hepatitis}</td>
              </tr>
              <tr>
                <th data-name="tipo">Tipo:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.tipo}</td>
              </tr>
              <tr>
                <th data-name="fracturas">Fracturas:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.fracturas}</td>
              </tr>
              <tr>
                <th data-name="zona">Zona:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.zona}</td>
              </tr>
              <tr>
                <th data-name="antiguedad">Antiguedad:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.antiguedad}</td>
              </tr>
              <tr>
                <th data-name="observaciones">Observaciones:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.observaciones}</td>
              </tr>
              <tr>
                <th data-name="actividad">Actividad fisica:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.actividad}</td>
              </tr>
              <tr>
                <th data-name="detalle">Detalle:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.detalle}</td>
              </tr>
              <tr>
                <th data-name="atencion">Esta bajo atencion medica?:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.atencion}</td>
              </tr>
              <tr>
                <th data-name="medicamentos">Toma medicamentos?:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.medicamentos}</td>
              </tr>
              <tr>
                <th data-name="cuales">Cuales?:</th>
                <td class="userEnfermedadesEdit" data-id-edit-${el._id}>${el.userEnfermedades.cuales}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="subtitle-admin mt-4 mb-2">
          <h3 class="userSocialEdit" data-id-spiner-${el._id}>Obra social</h3>
          <img class="edit" data-userSocial src=".././img/ico/edit.svg">
        </div>
        <div class="table-responsive-sm mt-3">
          <table class="table table-striped table-hover align-middle">
            <tbody>
              <tr>
                <th data-name="nombre">Nombre:</th>
                <td class="userSocialEdit" data-id-edit-${el._id}>${el.userSocial.nombre}</td>
              </tr>
              <tr>
                <th data-name="numero">Numero:</th>
                <td class="userSocialEdit" data-id-edit-${el._id}>${el.userSocial.numero}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <summary class="summaryDetails">
          <h3 class="name-summary">${el.userData.nombre}</h3>
          <div class="arrow"></div>
        </summary>  

        
          `;

          $fragment.appendChild($details)
      }
    });
    
    $container.replaceChildren($fragment)
  }catch(err){
    console.error(err)
  }
}

export const arrow = (e)=>{

  if (e.target.classList[0] === 'summaryDetails'){

    e.target.children[1].classList.toggle('arrow-down')

  }else if(e.target.matches('.name-summary')){
    e.target.nextElementSibling.classList.toggle('arrow-down')
  }else{

    e.target.classList.toggle('arrow-down')
  }

}

const editData = (userClass, id)=>{

  let dataItems = d.querySelectorAll(userClass + `[data-id-edit-${id}]`)
  
  dataItems.forEach( el =>{
    el.classList.toggle('inputEdit')
    el.contentEditable = 'true';
  })
}

const sendData = async (userClass, id)=>{

  try{
    let dataItems = d.querySelectorAll(userClass + `[data-id-edit-${id}]`),
    data = {id,
            form: ''
          };

    if(userClass === '.userDataEdit') data.form = 'userData'
    if(userClass === '.userContactEdit') data.form = 'userContact'
    if(userClass === '.userMedicosEdit') data.form = 'userMedicos'
    if(userClass === '.userEnfermedadesEdit') data.form = 'userEnfermedades'
    if(userClass === '.userSocialEdit') data.form = 'userSocial'
        
    dataItems.forEach( el =>{
      data[el.previousElementSibling.getAttribute('data-name')] = el.textContent
    })
  
    const res = await fetch('/saveAdmin',
      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
    const dataCompleted = await res.json()

    if (dataCompleted.completed) {

      let spiner = document.querySelector(userClass + `[data-id-spiner-${id}]`).nextElementSibling,
          editImg = document.createElement('img'),
          imgClass = userClass.slice(1,-4);

      editImg.classList.add('edit')
      editImg.setAttribute(`data-${imgClass}`,'')
      editImg.setAttribute('src','.././img/ico/edit.svg')

      spiner.replaceWith(editImg)

      dataItems.forEach( el =>{
        el.classList.toggle('inputEdit')
        el.contentEditable = 'false';
      })
    }

  }catch(err){
    console.log(err)
  }


}

export const edit = (e)=>{
  let id;
  id= e.target.parentNode.parentNode.getAttribute('data-id')

  e.target.classList.replace('edit', 'saveAdmin')
  e.target.setAttribute('src','.././img/ico/save.svg')
  
  if (e.target.hasAttribute('data-userData')) editData(`.userDataEdit`, id)

  if (e.target.hasAttribute('data-userContact')) editData(`.userContactEdit`, id)
  
  if (e.target.hasAttribute('data-userMedicos')) editData(`.userMedicosEdit`, id)
  
  if (e.target.hasAttribute('data-userEnfermedades')) editData(`.userEnfermedadesEdit`, id)
  
  if (e.target.hasAttribute('data-userSocial')) editData(`.userSocialEdit`, id)
}

export const saveAdmin = (e)=>{

  let id = e.target.parentNode.parentNode.getAttribute('data-id')

  if (e.target.hasAttribute('data-userData')) sendData(`.userDataEdit`, id)

  if (e.target.hasAttribute('data-userContact')) sendData(`.userContactEdit`, id)
  
  if (e.target.hasAttribute('data-userMedicos')) sendData(`.userMedicosEdit`, id)
  
  if (e.target.hasAttribute('data-userEnfermedades')) sendData(`.userEnfermedadesEdit`, id)
  
  if (e.target.hasAttribute('data-userSocial')) sendData(`.userSocialEdit`, id)
}

export const deleteUser = async (e)=>{
  try {
    const confirm = window.confirm("¿Desea eliminar a este paciente?")

    if (confirm){
      const id = e.target.getAttribute('data-id-delete')
      const res = await fetch(`/deleteUser/${id}`,
      {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      });
      
      if(res.status === 200) document.querySelector(`[data-id="${id}"]`).style.display = 'none';

    }
  } catch (error) {
    console.log(error)
  }

}

export const expandir = (e)=>{
  if(e.target.matches(".arrow") || e.target.matches(".name-summary") ){
    
    e.target.parentElement.parentElement.classList.toggle("listDetails-close")

  }else{
    e.target.parentElement.classList.toggle("listDetails-close")
  }
  
}

export const updateCode = async (e)=>{
  try {
    e.preventDefault()

    let codigo = { codigo: d.querySelector("#codigo").value }
    

    const res = await fetch('/updateCode',
    {
      method: 'PUT',
      body: JSON.stringify(codigo),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const completed = await res.json()

    if(completed) {

      window.alert("Codigo actulizado correctamente")
      
      window.location.assign('/admin')
    }

  } catch (error) {
    console.log(error)
  }
  
}

export const getCode = async ()=> {
  const currentCode = d.querySelector('#codigoActual')

  if (currentCode) {
    const res = await fetch('/getCode',
    {
      method: 'GET',
    })
    const code = await res.json()

    currentCode.textContent = `El codigo actual es ${code.codigo}`
  }
}