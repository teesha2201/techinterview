
const express = require("express");
const app = express();
const port = 4003;
const cors = require("cors")
const Connection = require("./config/db");
const userroute = require("./route/userroute");
app.use(express.json())
app.use(cors({
    origin:"*"
}))
app.use("/user",userroute)


app.listen(port,async()=>{
  try{
    await Connection();
    console.log(`server is running fine on port no. ${port}`)
  }
  catch(err){
    console.log(`having error on port no. ${err}`)
  }
})

