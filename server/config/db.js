const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(
        `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold //cyan.underline.bold is the 'colors' package installed
    )
}

module.exports = connectDB
