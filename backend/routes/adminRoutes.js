const express = require('express');
const router = express.Router();
const {registerAdmin,loginAdmin,getAllUsers, deleteUser,getAllAdmins} = require('../controllers/adminController')


router.post('/register',registerAdmin)
router.post('/login',loginAdmin)
router.get('/listUsers',getAllUsers)
router.delete('/deleteUser/:userId',deleteUser);
router.post('/adminFullData',userFullData)



module.exports = router;