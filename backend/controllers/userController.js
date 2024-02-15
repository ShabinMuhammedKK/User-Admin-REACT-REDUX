const asyncHandler = require('express-async-handler');


const loginUser = asyncHandler(async(req,res)=>{
    res.status(200).send('loginUser');
})
const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).send('registerUser');
})
const profilePage= asyncHandler(async(req,res)=>{
    res.status(200).send('profilePage');
})
const homePage = asyncHandler(async(req,res)=>{
    res.status(200).send('homePage');
})
const loginSubmit = asyncHandler(async(req,res)=>{
    res.status(200).send('loginSubmit');
})
const registerSubmit = asyncHandler(async(req,res)=>{
    res.status(200).send('registerSubmit');
})
const profImgPost = asyncHandler(async(req,res)=>{
    res.status(200).send('profImgPost');
})
const profUpdate = asyncHandler(async(req,res)=>{
    res.status(200).send('profUpdate');
})
const logOutUser = asyncHandler(async(req,res)=>{
    res.status(200).send('logOutUser');
})




module.exports = {
    loginUser,
    logOutUser,
    profUpdate,
    profImgPost,
    registerSubmit,
    loginSubmit,
    homePage,
    profilePage,
    registerUser
}