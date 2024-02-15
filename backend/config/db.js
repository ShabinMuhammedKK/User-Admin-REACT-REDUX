const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongDB connected on: ${conn.connection.host}`)
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
}

module.exports = connectDB;