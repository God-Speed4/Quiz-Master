import axios from 'axios';

const url = 'http://localhost:5000/quiz';

export const fetchQuiz = () => axios.get(url)
export const createQuiz = (newQuiz) => axios.POST(url, newQuiz);
export const updateQuiz = (id, updateQuiz) => axios.patch(`${url}/${id}`, updateQuiz);
export const deleteQuiz = (id) => axios.delete(`${url}/${id}`);

