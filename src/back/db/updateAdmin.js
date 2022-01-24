require('./connection');

const User = require('../models/user')

exports.updateAdmin = async (request) => {
  
  try{
    let _id = request.id,
    userFinded = await User.findOne({_id})

    if (request.form==='userData'){
      console.log("estoy en data")
      
      userFinded.userData = {
        isSaved: true,
        nombre: request.nombre,
        sexo: request.sexo,
        fechaDeNacimiento: request.fechaDeNacimiento,
        estadoCivil: request.estadoCivil,
        ocupacion: request.ocupacion
      }
    }else if(request.form==='userContact'){
      console.log("estoy en contacto")
      userFinded.userContact = {
        isSaved: true,
        domicilio: request.domicilio,
        localidad: request.localidad,
        cp: request.cp,
        telefono: request.telefono,
        email: request.email
      }
    }else if(request.form==='userSocial'){
      console.log("estoy enScocial")
      userFinded.userSocial = {
        isSaved: true,
        nombre: request.nombre,
        numero: request.numero
      }
    }else if(request.form==='userEnfermedades'){
      console.log("estoy Enfermedades")
      userFinded.userEnfermedades = {
        isSaved: true,
        diabetes: request.diabetes,
        marcapasos: request.marcapasos,
        alergias: request.alergias,
        asma: request.asma,
        sida: request.sida,
        epilepsia: request.epilepsia,
        dental: request.dental,
        lentes: request.lentes,
        hipotenso: request.hipotenso,
        hipertenso: request.hipertenso,
        hepatitis: request.hepatitis,
        tipo: request.tipo,
        fracturas: request.fracturas,
        zona: request.zona,
        antiguedad: request.antiguedad,
        observaciones: request.observaciones,
        actividad: request.actividad,
        detalle: request.detalle,
        atencion: request.atencion,
        medicamentos: request.medicamentos,
        cuales: request.cuales
      }
    }else if(request.form==='userMedicos'){
      console.log("estoy Medicos")
      userFinded.userMedicos = {
        isSaved: true,
        sangre: request.sangre,
        hijos: request.hijos,
        embarazada: request.embarazada,
        menstruacion: request.menstruacion,
        cirugias: request.cirugias,
        detalles: request.detalles,
      }
    }
    await userFinded.save();
    return true



    
    // res.render("_user-data", {data})

  }catch(err){

    console.log(err)

  }
}


