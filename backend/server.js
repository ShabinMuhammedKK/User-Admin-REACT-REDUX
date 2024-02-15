const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;


const app = express();

app.use('/user',require('./routes/userRoutes'))
app.use('/admin',require('./routes/adminRoutes'))

app.listen(PORT,()=>console.log(`server is on http://localhost:${PORT}`))