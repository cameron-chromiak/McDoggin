const express = require('express');
const mongoose = require('mongoose');


const app = express()

//connect to DB
const db = require('./config/keys').mongoURI
mongoose.connect(db, { useNewUrlParser: true })
  .then( res => console.log('Mongo Connected'))
  .catch(err => console.log(err))


app.get('/', (req, res) =>{
  res.send('.kjl')
})


const port = process.env.PORT || 4000
app.listen(port, () => console.log(`App running on port ${port}`))
