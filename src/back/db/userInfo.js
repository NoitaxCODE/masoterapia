require('./connection');

const User = require('../models/user');


exports.userData = async function userData(user, userSesion, edit){
  try{
    const userFinded = await User.findOne({ email: userSesion.email });
    
    if (edit){

      userFinded.userData = {
        isSaved: false,
      }

    }else{

      userFinded.userData = {
        isSaved: true,
        nombre: user.nombre,
        sexo: user.sexo,
        fechaDeNacimiento: user.fechaDeNacimiento,
        estadoCivil: user.estadoCivil,
        ocupacion: user.ocupacion
      }
      
    }

    await userFinded.save();
    
    return true

  }catch(err){
    console.log(err)
  }
}

exports.userContact = async function userContact(user, userSesion, edit){
  try{
    const userFinded = await User.findOne({email: userSesion.email})

    if (edit){
      userFinded.userContact = {
        isSaved: false,
      }

    }else{

      userFinded.userContact = {
        isSaved: true,
        domicilio: user.domicilio,
        localidad: user.localidad,
        cp: user.cp,
        telefono: user.telefono,
        email: user.email
      }
    }
    await userFinded.save();

    return true
  }catch(err){
    console.log(err)
  }
}

exports.userSocial = async function userSocial(user, userSesion, edit){
  try{
    const userFinded = await User.findOne({email: userSesion.email})
    if (edit){
      userFinded.userSocial = {
        isSaved: false,
      }

    }else{
      userFinded.userSocial = {
        isSaved: true,
        nombre: user.nombre,
        numero: user.numero
      }
    }
    await userFinded.save();
    return true
  }catch(err){
    console.log(err)
  }
}

exports.userEnfermedades = async function userEnfermedades(user, userSesion, edit){
  try{
    const userFinded = await User.findOne({email: userSesion.email})

    if (edit){
      userFinded.userEnfermedades = {
        isSaved: false,
      }

    }else{

      userFinded.userEnfermedades = {
        isSaved: true,
        diabetes: user.diabetes,
        marcapasos: user.marcapasos,
        alergias: user.alergias,
        asma: user.asma,
        sida: user.sida,
        epilepsia: user.epilepsia,
        dental: user.dental,
        lentes: user.lentes,
        hipotenso: user.hipotenso,
        hipertenso: user.hipertenso,
        hepatitis: user.hepatitis,
        tipo: user.hepatitisTipo,
        fracturas: user.fracturas,
        zona: user.zona,
        antiguedad: user.antiguedad,
        observaciones: user.observaciones,
        actividad: user.actividad,
        detalle: user.detalle,
        atencion: user.atencion,
        medicamentos: user.medicamentos,
        cuales: user.cuales
      }
    }
    await userFinded.save();
    return true

  }catch(err){
    console.log(err)
  }
}

exports.userMedicos = async function userMedicos(user, userSesion, edit){
  try{
    const userFinded = await User.findOne({email: userSesion.email})

    if (edit){
      userFinded.userMedicos = {
        isSaved: false,
      }

    }else{

      userFinded.userMedicos = {
        isSaved: true,
        sangre: user.sangre,
        hijos: user.hijos,
        embarazada: user.embarazada,
        menstruacion: user.menstruacion,
        cirugias: user.cirugias,
        detalles: user.detalles,
      }
    }
    await userFinded.save();
    return true
  }catch(err){
    console.log(err)
  }
}