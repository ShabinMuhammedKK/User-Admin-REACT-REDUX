const asyncHandler = require('express-async-handler');
const AdminDB = require('../models/adminModel');
const UserDB = require('../models/userModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


//add user
//edit user

const registerAdmin = asyncHandler(async(req,res)=>{
    const {name,email,password,confPassword} = req.body;
    if(!name || !email ||!password || !confPassword){
        res.status(400)
        throw new Error('Please add all fields')
    }
    if(!(password === confPassword)){
        res.status(400)
        throw new Error('Passwords is not matched')
    }
    const existAdmin = await AdminDB.findOne({email})
    if(existAdmin){
        res.status(400)
        throw new Error('Admin already exits')
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const Admin = await AdminDB.create({
        name,
        email,
        password:hashedPassword
    })
    if(Admin){
        res.status(200).json({
            _id:Admin.id,
            name:Admin.name,
            email:Admin.email,
            password:Admin.password,
            token:generateToken(Admin.id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
    
})



const loginAdmin = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    const Admin = await AdminDB.findOne({email});
    if(Admin && (await bcrypt.compare(password,Admin.password))){
        res.status(200).json({
            _id:Admin.id,
            name:Admin.name,
            email:Admin.email,
            password:Admin.password,
            token:generateToken(Admin.id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid credenttials')
    }
})

const getAllUsers = asyncHandler(async (req, res) => {
    const Users = await UserDB.find();
    if (Users) {
        res.status(200).json({ Users });
        
    } else {
        res.status(404).json({ message: 'No users found' });
    }
});

const deleteUser = asyncHandler( async (req,res)=>{
    const userId = req.params.userId;
   
    const user = await UserDB.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    await UserDB.findByIdAndDelete(userId);
    res.status(200).json({ message: 'User deleted successfully' });
})

const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'1h',
    })
}

const getAllAdmins = asyncHandler(async(req,res)=>{
    const{adminEmail} = req.body
    const adminFullData = await AdminDB.findOne({email:adminEmail})
    res.status(200).json(adminFullData)
})

module.exports = {
    registerAdmin,
    loginAdmin,
    getAllUsers,
    deleteUser,
    getAllAdmins
}