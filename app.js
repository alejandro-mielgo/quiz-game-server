require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const usersRouter = require('./controllers/users')



mongoose.set('strictQuery', false)

console.log("Conectando a mongodb en uri ", process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI)
    .then(() =>{
        console.log("Conectado a mongodb")
    })
    .catch(error => {
        console.log(error)
    })

app.use(cors())
app.use(express.static('dist'))
app.use(express.json()) //Sin esto no funcionan las querys post! no reoconoce el body de la request

app.use('/api/users', usersRouter)


module.exports = app
