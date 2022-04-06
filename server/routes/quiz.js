import express from 'express';
import {getQuiz, createQuiz} from '../controllers/quiz.js'
const router = express.Router();

router.get('/', getQuiz);
router.post('/', createQuiz);
export default router; 