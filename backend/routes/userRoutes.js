const express = require('express');
const router = express.Router();
const {loginUser,
    homePage,
    logOutUser,
    loginSubmit,
    profImgPost,
    profilePage,
    profUpdate,
    registerSubmit,
    registerUser} = require('../controllers/userController')


/*-----------------------------
@GET   login page / register page / profile page / home page
@POST  login page / register page / logout
@PUT   profile img
@PATCH profile page
-------------------------------*/


router.get('/login',loginUser)
router.get('/home',homePage)
router.get('/register',registerUser)
router.get('/profile',profilePage)
router.post('/loginsubmit/:id',loginSubmit)
router.post('/regsubmit/:id',registerSubmit)
router.post('/logout',logOutUser)
router.put('/postprofimg',profImgPost)
router.patch('/profupdate',profUpdate)





module.exports = router;