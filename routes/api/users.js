const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
//User model
const User = require('../../models/User');

router.get('/test', (req, res) =>{
  res.send('fs')
})

//@route GET /api/users/test
//@desc
//@access Public
router.get('/register', (req, res)=>{
  let error = {}
  User.findOne({email: req.body.email})
  .then(user => {
    if(user){
      res.status(400).json({error: 'Email taken'})
    }else{
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newUser.password, salt, (err, hash) =>{
          if(err) throw err;
          newUser.password = hash
          newUser.save()
          .then(user => res.json(user))
          .catch(err => console.log(err))
        })
      })
    }
  })
})

module.exports = router
