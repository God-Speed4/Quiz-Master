import QuizData from "../models/quizdata.js";
export const getQuiz = async (req, res) => {
    try{
        const quizData = await QuizData.find();

        console.log(quizData)
        res.status(200).json(quizData);
    }catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createQuiz = (req, res) => {
    const quiz = req.body;
    const newQuiz = new QuizData(post);
    try {
        await newQuiz.save();

        res.status(201).json(newPost);
    }catch (error) {
        res.status(409).json({message: error.message});
    }
    res.send('a Creation');
}