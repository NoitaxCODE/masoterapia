const mongoose = require('mongoose');

const uri = 'mongodb+srv://gpappaterra:tonga0623@cluster0.xozmg.mongodb.net/logIn?retryWrites=true&w=majority';

mongoose.connect(uri,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .catch(err => console.log(err));

mongoose.connection.on('open', ()=>{
  console.log('Database is connected to ',uri);
})

