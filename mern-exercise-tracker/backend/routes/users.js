const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res)=>{
    User.find()  //method to get users from db 
    .then(users => res.json(users))
    .catch(error =>res.status(400).json('error', error)); 
})

router.route('/add').get((req, res)=>{
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()  //mongoose method to save new user to db
  .then(()=>{
      console.log('new user succsessfully saved');
      return res.json({msg: "new user added"});
  })
  .catch((err)=>{
      console.log('failed to save user');
      return res.json({msg: 'new user not added'});
  }) 
})

module.exports = router;