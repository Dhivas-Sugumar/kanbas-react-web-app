import { createSlice } from "@reduxjs/toolkit";
import { QuizState } from "../../store"; // Assuming QuizState is defined in store.js

const initialState: QuizState = {
  quizzes: [],
  quiz: {
    _id: "test",
    title: "New Quiz",
    description: "New Description",
    quizType: "Graded Quiz",
    points: 10,
    assignmentGroup: "Quizzes",
    shuffleAnswers: true,
    timeLimit: 20,
    multipleAttempts: false,
    showCorrectAnswers: false,
    accessCode: "",
    oneQuestionAtATime: true,
    webcamRequired: false,
    lockQuestionsAfterAnswering: false,
    dueDate: new Date(),
    availableDate: new Date(),
    untilDate: new Date(),
    published: false,
    course: "Test", // Assuming course ID or name here
  },
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, action) => {
      state.quizzes = [action.payload, ...state.quizzes];
    },
    deleteQuiz: (state, action) => {
      state.quizzes = state.quizzes.filter(
        (quiz) => quiz._id !== action.payload
      );
    },
    updateQuiz: (state, action) => {
      state.quizzes = state.quizzes.map((quiz) => {
        if (quiz._id === action.payload._id) {
          return action.payload;
        } else {
          return quiz;
        }
      });
    },
    setQuiz: (state, action) => {
      state.quiz = action.payload;
    },
  },
});

export const {
  addQuiz,
  deleteQuiz,
  updateQuiz,
  setQuiz,
  setQuizzes,
} = quizzesSlice.actions;

export default quizzesSlice.reducer;
