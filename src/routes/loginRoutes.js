const express = require('express');
const loginRouter = express.Router();
const jwt = require('jsonwebtoken');
const Userdata = require('../model/Userdata');

adminemail='admin@gmail.com'
adminpassword='12345678'

loginRouter.post('/',(req,res)=>{
    res.header("Access-Control-Allow-Orgin","*")
    res.header('Access-Control-Allow-Methods: GET,POST, PATCH , PUT, DELETE,OPTIONS');
  let password = req.body.password;
  let email = req.body.email;

Userdata.findOne({"email":email})
.then(function(Userdat){
    if ( ( email === adminemail && password === adminpassword ) || (email === Userdat?.email && password === Userdat?.password) ) {
  
        let payload = {subject: email+password}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      } 
      else 
       {
        res.status(401).send('Invalid Password or Invalid Password')
      } 
})

})


module.exports = loginRouter;