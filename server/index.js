const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const colors = require('colors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
// const connectDB = require('./config/db')
const port = process.env.PORT || 8000

const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.static('build'))

// //connect to database
// connectDB()

mongoose
    .connect(process.env.MONGO_URI)
    .then(console.log(`MongoDB connected`.cyan.underline.bold))

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development',
    })
)
// app.use(
//     '/graphql',
//     graphqlHTTP({
//         schema,
//         graphiql: process.env.NODE_ENV === 'development',
//     })
// )
//graphiql only set to be true if process.env.NODE_ENV === 'development' is true;

app.listen(port, console.log(`server running on ${port}`))
