const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//Load routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');

const app = express()

//connect to DB
const db = require('./config/keys').mongoURI
mongoose.connect(db, { useNewUrlParser: true })
  .then( res => console.log('Mongo Connected'))
  .catch(err => console.log(err))

  //Body Parser Middleware
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())


app.get('/', (req, res) =>{
  res.send('')
})

//Use routes
app.use('/api/users', users)
app.use('/api/profile', profile)


const port = process.env.PORT || 4000
app.listen(port, () => console.log(`App running on port ${port}`))
