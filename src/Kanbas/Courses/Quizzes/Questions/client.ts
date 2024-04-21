import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

const COURSES_API = `${API_BASE}/api/courses`;
const QUESTIONS_API = `${API_BASE}/api/questions`;

export const deleteQuestion = async (questionId : any) => {
  const response = await axios.delete(`${QUESTIONS_API}/${questionId}`);
  return response.data;
};

export const findQuestionsForQuiz = async (quizId : any) => {
  const response = await axios.get(`${QUESTIONS_API}/${quizId}`);
  return response.data;
};

export const createQuestion = async (quizId: any, question: any) => {
  const response = await axios.post(
    `${QUESTIONS_API}/${quizId}`,
    question
  );
  return response.data;
};

export const updateQuestion = async (question: any) => {
  const response = await axios.put(`${QUESTIONS_API}/${question._id}`, question);
  return response.data;
};

export const findAllQuestions = async () => {
  const response = await axios.get(QUESTIONS_API);
  return response.data;
}