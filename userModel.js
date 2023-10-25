const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Please provide an email"],
        unique:[true,'Émail Exists']
    },
    password:{
        type:String,
        required:[true,"Please provide an password"],
        unique:false,
    }
})
module.exports=mongoose.model.Users || mongoose.model('Users',UserSchema)