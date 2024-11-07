const User = require('../models/user')
const usersRouter = require('express').Router()
const bcrypt = require('bcrypt')


usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users)
})

usersRouter.post('/', async (request, response) => {
    const { userName, password, email } = request.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password,saltRounds)
    
    const user = new User({
        userName: userName,
        passwordHash: passwordHash,
        email: email
    })

    try{
        const savedUser = await user.save()
        response.status(201).json(savedUser)
        console.log(`${userName} added to the database`)
    } catch (error) {
        console.log(error)
        response.status(400).json({error: "error creating user"})
    }
})

usersRouter.delete('/', async(request, response) => { //borra a todos los usuarios!
    await User.deleteMany({})
})


module.exports = usersRouter