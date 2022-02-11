const express = require('express');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');


//Inicializations

const app = express()
require('./db/connection')
require('./passport/local-auth')


//Settings
app.engine('pug', require('pug').__express)
app.set('views', `${path.join(__dirname, '../views')}`);
app.set('view engine', 'pug')
app.set('port', process.env.PORT || 4000);

//Starting the server

app.listen(app.get('port'), ()=>{
  console.log('Server on port', app.get('port'));
});

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: 'mysecretsession',
  resave: false,
  saveUninitialized: false
}))
app.use(express.static(path.join(__dirname, '../public')));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  app.locals.signinMessage = req.flash('signinMessage');
  app.locals.signupMessage = req.flash('signupMessage');
  app.locals.user = req.user;
  next();
});
app.use(express.json());

//Routes
app.use('/', require('./routes/index-routes'))