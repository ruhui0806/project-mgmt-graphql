const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./server/schema/schema')
const { ApolloServer, gql } = require('apollo-server-express')
const path = require('path')
const port = process.env.PORT || 8000

const app = express()
const cors = require('cors')
app.use(cors())

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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'))
    // app.get('*', (req, res) => {
    //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    // })
}
app.listen(port, console.log(`server running on ${port}`))
