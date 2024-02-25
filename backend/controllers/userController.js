const asyncHandler = require('express-async-handler');
const UserDB = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const registerUser = asyncHandler(async(req,res)=>{


    const data = req.body;
    console.log(data)



    const {name,email,password,confPassword} = req.body;
    if(!name || !email || !password || !confPassword){
        res.status(400)
        throw new Error('Please add all fields');
    }
    if (password.length < 6 || confPassword.length <6) {
        res.status(400);
        throw new Error('Password must be at least 6 characters long');
      }
    const userExits = await UserDB.findOne({email})
    if(userExits){
        res.status(400)
        throw new Error('User already exits');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const User = await UserDB.create({
        name,
        email,
        password:hashedPassword
    })
    if(User){
        res.status(200).json({
            _id:User.id,
            name:User.name,
            email:User.email,
            password:User.password,
            token:genetateToken(User.id)

        })
    }else{
        res.status(400)
        throw new Error('Invalid user data');
    }
    
})


const loginUser = asyncHandler(async(req,res)=>{


    const {email,password} = req.body;
    const User = await UserDB.findOne({email});
    if(User && (await bcrypt.compare(password,User.password))){
        res.json({
            _id:User.id,
            name:User.name,
            email:User.email,
            token:genetateToken(User.id)

        })
    }else{
        res.status(400);
        throw new Error('Invalid credentials')
    }
})

const genetateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'1h',
    })
}

const userFullData = asyncHandler(async(req,res)=>{
    const{userEmail} = req.body
    const userFullData = await UserDB.findOne({email:userEmail})
    res.status(200).json(userFullData)
})



module.exports = {
    registerUser,
    loginUser,
    userFullData
}