const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmpassword: {
    type: String,
  },
});



const RegisterModel = mongoose.model("userRegister", User);


module.exports =  RegisterModel;
