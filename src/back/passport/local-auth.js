const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const Codes = require('../models/code');
const flash = require('connect-flash');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},async (req, email, password, done) =>{

  const user = await User.findOne({ email: email })
  const codes = await Codes.findOne({ codigo: req.body.codigo })

  if (user){
    return done(null, false, req.flash('signupMessage', 'El email ya existe.'));
  }else if(!codes){
    return done(null, false, req.flash('signupMessage', 'El codigo no es valido.'));
  }else{
    const newUser = new User();
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    await newUser.save();
    done(null, newUser)
  }
}))

passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},async (req, email, password, done)=>{


  
  const user = await User.findOne({email: email});


  if (!user) return done(null, false, req.flash('signinMessage', 'El usuario no existe'))
  
  if (!user.comparePassword(password)) return done(null, false, req.flash('signinMessage', 'La contraseña es incorrecta'))

  
  done(null, user)
}))