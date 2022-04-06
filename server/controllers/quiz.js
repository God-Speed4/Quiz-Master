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

export const createQuiz = async (req, res) => {
    const quiz = req.body;
    const newQuiz = new QuizData(quiz);
    try {
        await newQuiz.save();

        res.status(201).json(newQuiz);
    }catch (error) {
        res.status(409).json({message: error.message});
    }
    res.send('a Creation');
}

export const updateQuiz = async (req, res) => {
    const {id:_id} = req.params;
    const quiz = req.body;
    if(!mongooose.Types.ObjectId.isValid(_id)) return res.status(404).send('No quiz with that id');

    const updatedQuiz = await QuizData.findByIdAndUpdate(_id, quiz, {new: true});
    
    res.json(updatedQuiz);
}

export const deleteconsQuiz = async(req, res) => {
    const {id} = req.params;

    if(!mongooose.Types.ObjectId.isValid(_id)) return res.status(404).send('No quiz with that id');

    await QuizData.findByIdAndUpdate(id);
    
    res.json({message:'Quiz delted seccessfully'});
}
