const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.1a08p.mongodb.net/LIBRARY?retryWrites=true&w=majority'
,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}
);
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : String,
    email : {type :String, unique:true },
    password : String,
});

var Userdata = mongoose.model('userdata',UserSchema);

module.exports = Userdata;