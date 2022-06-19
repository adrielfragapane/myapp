const mongoose = require('mongoose')

mongoose.connect('mongodb://mydatabase/test', { useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('Conectado a la base de datos', db.connection.host))
.catch(err => console.log(err))