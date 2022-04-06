import mongoose from "mongoose";
const quizSchema = mongoose.Schema({
title: String,
description: String,
creator: String,
tags: [String],
selectedFile: String,
likeCount: {
    type: Number,
    default: 0
},
createdAt: {
    type: Date,
    default: new Date()
},

});

const QuizData = mongoose.model('QuizData', quizSchema);

export default QuizData;