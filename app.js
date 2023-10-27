const express=require('express');
const app=express();
const dbConnect=require('./db/dbConnect')
const User=require('./db/userModel')
dbConnect()
const newUser=new User({
    email:'anjum@example.com',
    password:'anjum123'
})
/*newUser.save()
.then(()=>{
    console.log('user inserted successfully')
})
.catch((error)=>{
    console.error('Error inserting user',error)
})
User.find()
.then((users)=>{
    console.log('Users found',users)
})
.catch((error)=>{
    console.error('Error Finding users',error)
})*/
//User.updateMany
/* User.updateOne({email:'anjum@example.com'},{password:'newanjum123'})
.then(()=>{
    console.log('USer updated successfully')
})
.catch((error)=>{
    console.error('Error updating users',error)
})
User.deleteOne({email:'anjum@example.com'},{password:'newanjum123'})
.then(()=>{
    console.log('USer deleted successfully')
})
.catch((error)=>{
    console.error('Error deleting users',error)
}) */
/* User.updateMany({email:'anjum@example.com'},{password:'newanjum123'})
.then((result)=>{
    console.log('USer updated successfully',result)
})
.catch((error)=>{
    console.error('Error updating users',error)
}) */

User.collection.createIndex({email:1},{unique:true})
User.find({email:'john@examplecom'}).select({email:1,_id:0})
.then((users)=>{
    console.log('users found',users)
})
.catch((error)=>{
    console.error('error finding users',error)
})




module.exports=app;
