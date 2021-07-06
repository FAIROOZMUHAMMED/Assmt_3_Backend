const express = require('express');
var cors = require('cors');
var app = new express();
app.use(cors());
app.use(express.json());



const booksRouter = require('./src/routes/bookRoute');
const authorRouter = require('./src/routes/authorRoute');
const loginRouter = require('./src/routes/loginRoutes');



app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/login',loginRouter);


const Userdata = require('./src/model/Userdata');
// Login
// email='admin@gmail.com'
// password='12345678'


// app.post('/',(req,res)=>{
 
//   let userdata = req.body

//       if(!email){
//         res.status(401).send('invalid email')
//       }
//        else if( password !== userdata.password){
//         res.status(401).send('invalid Password')
//       } 
//       else{
//         let payload = {subject: email+password}
//         let token = jwt.sign(payload, 'secretKey')
//         res.status(200).send({token})
//       }     
// })

// Signup
app.post('/signup',function(req,res){
  res.header("Access-Control-Allow-Orgin","*")
  res.header('Access-Control-Allow-Methods: GET,POST, PATCH , PUT, DELETE,OPTIONS');
  console.log(req.body);
  var User ={
     name : req.body.user.name,
      email : req.body.user.email,
      password: req.body.user.password,
  }
  var User =new Userdata(User);
  User.save();
});



app.listen (3300,function(){
    console.log('listening to port 3300');
})