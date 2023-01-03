const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./server/schema/schema')
const { ApolloServer, gql } = require('apollo-server-express')

const port = process.env.PORT || 8000

const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.static('build'))

// connect to database
const url = process.env.MONGO_URI
mongoose.set('strictQuery', true)
mongoose
    .connect(url)
    .then((res) => console.log('Connected to Mongo DB successfully'))
    .catch((err) =>
        console.log('Error occured when connecting to MongoDB: ', err.message)
    )

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
)
// graphiql only set to be true if process.env.NODE_ENV === 'development' is true: graphiql: process.env.NODE_ENV === 'development'

app.listen(port, console.log(`server running on ${port}`))
