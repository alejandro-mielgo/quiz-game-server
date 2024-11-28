const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    question: String,
    correct_answer: String,
    wrong_answer_1: String,
    wrong_answer_2: String,
    wrong_answer_3: String,
})

const Question = mongoose.model('Question', questionSchema)
module.exports = Question