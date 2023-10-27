const mongoose=require('mongoose');
//require('dotenv').config()
const dotenv = require("dotenv");
require('dotenv').config()
//dotenv.config();

async function dbConnect(){
   
    mongoose.connect(`${process.env.DB_URL}`,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log('successfully connected to mongodb ')
    }).catch((error)=>{
    console.log("unale to connect to mongodb")
    console.error(error)
    })
}
module.exports=dbConnect;
