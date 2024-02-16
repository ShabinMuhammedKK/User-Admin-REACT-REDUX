const express = require('express');
const router = express.Router();
const {registerAdmin,loginAdmin,getAllUsers} = require('../controllers/adminController')


router.post('/register',registerAdmin)
router.post('/login',loginAdmin)
router.get('/listUsers',getAllUsers)



module.exports = router;