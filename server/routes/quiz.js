import express from 'express';
import {getQuiz, createQuiz,updateQuiz} from '../controllers/quiz.js'
const router = express.Router();

router.get('/', getQuiz);
router.post('/', createQuiz);
router.post('/:id', updateQuiz);
export default router; 