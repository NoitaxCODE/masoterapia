const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    default: 'Sin datos'
  },
  password: {
    type: String,
    default: 'Sin datos'
  },
  admin: {
    type: Boolean,
    default: false
  },
  userData: {
    isSaved: Boolean, 
    nombre: {
      type: String,
      default: 'Sin datos'
    },
    sexo: {
      type: String,
      default: 'Sin datos'
    },
    fechaDeNacimiento: {
      type: String,
      default: 'Sin datos'
    },
    estadoCivil: {
      type: String,
      default: 'Sin datos'
    },
    ocupacion: {
      type: String,
      default: 'Sin datos'
    }
  },
  userContact:{
    isSaved: Boolean,
    domicilio: {
      type: String,
      default: 'Sin datos'
    },
    localidad: {
      type: String,
      default: 'Sin datos'
    },
    cp: {
      type: String,
      default: 'Sin datos'
    },
    telefono: {
      type: String,
      default: 'Sin datos'
    },
    email: {
      type: String,
      default: 'Sin datos'
    }
  },
  userSocial:{
    isSaved: Boolean,
    nombre: {
      type: String,
      default: 'Sin datos'
    },
    numero: {
      type: String,
      default: 'Sin datos'
    }
  },
  userEnfermedades:{
    isSaved: Boolean,
    diabetes: {
      type: String,
      default: 'Sin datos'
    },
    marcapasos: {
      type: String,
      default: 'Sin datos'
    },
    alergias: {
      type: String,
      default: 'Sin datos'
    },
    asma: {
      type: String,
      default: 'Sin datos'
    },
    sida: {
      type: String,
      default: 'Sin datos'
    },
    epilepsia: {
      type: String,
      default: 'Sin datos'
    },
    dental: {
      type: String,
      default: 'Sin datos'
    },
    lentes: {
      type: String,
      default: 'Sin datos'
    },
    hipotenso: {
      type: String,
      default: 'Sin datos'
    },
    hipertenso: {
      type: String,
      default: 'Sin datos'
    },
    hepatitis: {
      type: String,
      default: 'Sin datos'
    },
    tipo: {
      type: String,
      default: 'Sin datos'
    },
    fracturas: {
      type: String,
      default: 'Sin datos'
    },
    zona: {
      type: String,
      default: 'Sin datos'
    },
    antiguedad: {
      type: String,
      default: 'Sin datos'
    },
    observaciones: {
      type: String,
      default: 'Sin datos'
    },
    actividad: {
      type: String,
      default: 'Sin datos'
    },
    detalle: {
      type: String,
      default: 'Sin datos'
    },
    atencion: {
      type: String,
      default: 'Sin datos'
    },
    medicamentos: {
      type: String,
      default: 'Sin datos'
    },
    cuales: {
      type: String,
      default: 'Sin datos'
    }
  },
  userMedicos:{
    isSaved: Boolean,
    sangre: {
      type: String,
      default: 'Sin datos'
    },
    hijos: {
      type: String,
      default: 'Sin datos'
    },
    embarazada: {
      type: String,
      default: 'Sin datos'
    },
    menstruacion: {
      type: String,
      default: 'Sin datos'
    },
    cirujias: {
      type: String,
      default: 'Sin datos'
    },
    detalles: {
      type: String,
      default: 'Sin datos'
    }
  },
},{
  timestamps: true,
});

userSchema.methods.encryptPassword = (password)=>{
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password){
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', userSchema);
