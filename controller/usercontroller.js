const RegisterModel = require("../model/usermodel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const RegisterController = async(req,res)=>{
    const data = req.body;
    console.log(data)
    const findemail =await RegisterModel.findOne({email:data.email})
    if(findemail){
      return  res.send({msg:"user already register"})
    }
    else{
        const hashpassword = bcrypt.hashSync(data.password,10)
        const tempObj = {
            name:data.name,
            email:data.email,
            password:hashpassword,
            confirmpassword:hashpassword
        }
        const response = await RegisterModel.create(tempObj);
       return res.send({msg:"user registered successfully"})

    }
}
const LoginController = async(req,res)=>{
    const logindata = req.body;
    console.log(logindata.password);
    const findemail =  await RegisterModel.findOne({email:logindata.email})
   
    if(findemail){
        const password = bcrypt.compareSync(logindata.password,findemail.password);
        
        if(password){
         const token = jwt.sign(logindata.email,"jan")
           return res.json({msg:"user Login Successfully",token:token,email:findemail.email})
        }
        else{
            return res.json({msg:"password is wrong"})
        }
    }
    
        return res.json({msg:"email is inCorrect"})
    
}
module.exports = {RegisterController,LoginController}