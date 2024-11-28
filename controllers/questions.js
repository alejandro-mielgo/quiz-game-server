const Question = require('../models/question')
const questionsRouter = require('express').Router()


questionsRouter.get('/', async (request, response) => {
    const questions = await Question.find({})
    response.json(questions)
})


questionsRouter.post('/', async (request, response) => {
    const { question, correct_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3 } = request.body

    const question_object = new Question ({
        question: question,
        correct_answer: correct_answer,
        wrong_answer_1: wrong_answer_1,
        wrong_answer_2: wrong_answer_2,
        wrong_answer_3: wrong_answer_3,
    })

    try{
        const savedQuestion = await question_object.save()
        response.status(201).json(savedQuestion)
        console.log(`${question} added to the database`)
    } catch (error) {
        console.log(error)
        response.status(400).json({error: "error submiting question"})
    }
})

questionsRouter.delete('/', async(request, response) => { //borra todas las preguntas
    await Question.deleteMany({})
    console.log("questions database erased. Good luck")
})

module.exports = questionsRouter