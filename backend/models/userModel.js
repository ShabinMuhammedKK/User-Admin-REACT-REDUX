const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter your name']
    },
    email:{
        type:String,
        required:[true,'Plese enter your email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Plese enter your password'],
        minlength:[6,'Password must be at least 6 characters long']
    } 
},{
    timestamps:true
})

module.exports = mongoose.model('UserDB',userSchema);
