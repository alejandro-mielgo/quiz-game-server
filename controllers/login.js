require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const loginRouter = require('express').Router()
const bcrypt = require('bcrypt')


loginRouter.post('/', async (request, response) => {
    const { userName, password } = request.body

    const user = await User.findOne({userName})
    const passwordCorrect = user===null ? false : await bcrypt.compare(password, user.passwordHash)

    if (!(user && passwordCorrect)) {
        console.log("incorrect password or username")
        return response.status(401).json({
            error: 'Invalid username of password'
        })
    }

    const userForToken = {
        username: user.userName,
        id: user._id,
    }

    const token = jwt.sign(userForToken, process.env.SECRET, {expiresIn: 60*60})
    console.log("logged in as ",user.userName)
    response
        .status(200)
        .send({token, userName: user.userName})

})

module.exports = loginRouter