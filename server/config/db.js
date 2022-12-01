const mongoose = require('mongoose')

const url = process.env.MONGO_URI

// const connectDB = async () => {
//     const conn = await mongoose.connect(process.env.MONGO_URI)
//     console.log(
//         `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold //cyan.underline.bold is the 'colors' package installed
//     )
// }

mongoose
    .connect(url)
    .then((res) => console.log('Connected to MongoDB'))
    .catch((err) =>
        console.log('Error occured when connecting to MongoDB: ', err)
    )

// module.exports = connectDB
