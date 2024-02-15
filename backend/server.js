const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;
const {errorHandler} = require('./middlewares/errorMIddleware')
const connectDB = require('./config/db')

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))



app.use('/user',require('./routes/userRoutes'))
app.use('/admin',require('./routes/adminRoutes'))

app.use(errorHandler);

app.listen(PORT,()=>console.log(`server is on http://localhost:${PORT}`))