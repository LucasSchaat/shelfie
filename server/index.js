require('dotenv').config({ path: __dirname + '/../.env'})
const express = require('express')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const controller = require('./controller')

const app = express()
app.use(express.json())

massive(CONNECTION_STRING)
    .then( db => {
        app.set('db', db)
        app.listen(SERVER_PORT, () => {
            console.log(`Server is now live on Port ${SERVER_PORT}`)
        })
    })
    .catch( err => console.log(err))

app.get('/api/inventory', controller.getProduct)
app.post('/api/product', controller.addNewProduct)
app.delete('/api/inventory/:id', controller.deleteProduct)