const d = document,
  w = window;

import { ocultarGenero } from "./views.js";
import {rePass} from "./registro.js"
import {loader} from "./loader.js"
import {cargarPacientes, arrow, expandir, edit, saveAdmin, deleteUser, updateCode, getCode} from "./admin.js"

d.addEventListener('click', (e)=>{

  if (e.target.matches('#btnRegistro')) rePass(e);

  if (e.target.matches('.save')) loader(e);
  
  if (e.target.matches('.saveAdmin')) {
    loader(e);
    saveAdmin(e);
  }

  if (e.target.matches('.btn_update') || e.target.matches('.refresh') || e.target.matches('.refresh-text')) {
    loader(e);
    cargarPacientes(e);
  }  

  if (e.target.matches('.arrow') || e.target.matches('.name-summary') || e.target.matches('.summaryDetails')) {
    arrow(e);
    expandir(e)
  }

  if (e.target.matches('.edit')) edit(e);

  if (e.target.matches('.delete-text') || e.target.matches('.trash') || e.target.matches('.delete')) deleteUser(e);

  if (e.target.matches('.btn-code')) {
    loader(e)
    updateCode(e)
  }
})

d.addEventListener('change',(e)=>{
  if (e.target.matches('.js-sex')) ocultarGenero(e)
})

d.addEventListener('DOMContentLoaded', ()=> getCode())
