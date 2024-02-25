const express = require('express');
const router = express.Router();
const {loginUser,registerUser,userFullData} = require('../controllers/userController')
const {protect} = require('../middlewares/authMiddleware')


/*-----------------------------
@GET   login page / register page / profile page / home page
@POST  login page / register page / logout
@PUT   profile img
@PATCH profile page
-------------------------------*/


router.post('/registerUser',registerUser)
router.post('/loginUser',loginUser)
router.post('/userFullData',userFullData)









module.exports = router;