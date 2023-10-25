const express=require('express');
const app=express();
const dbConnect=require('./db/dbConnect')
const User=require('./db/userModel')
dbConnect()
const newUser=new User({
    email:'anjum@example.com',
    password:'anjum123'
})
newUser.save()
.then(()=>{
    console.log('user inserted successfully')
})
.catch((error)=>{
    console.error('Error inserting user',error)
})
module.exports=app;