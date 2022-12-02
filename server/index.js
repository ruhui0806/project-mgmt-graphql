const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const colors = require('colors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const { ApolloServer, gql } = require('apollo-server-express')

const port = process.env.PORT || 8000

const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.static('build'))

//connect to database
const url = process.env.MONGO_URI

mongoose
    .connect(url)
    .then((res) => console.log('Connected to MongoDB'))
    .catch((err) =>
        console.log('Error occured when connecting to MongoDB: ', err)
    )

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development',
    })
)
// graphiql only set to be true if process.env.NODE_ENV === 'development' is true;

app.listen(port, console.log(`server running on ${port}`))
