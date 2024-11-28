const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        unique: true,
    },
    passwordHash: String,
    email: {
        type: String,
        unique: true,
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User