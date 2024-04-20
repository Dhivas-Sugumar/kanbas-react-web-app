import { createSlice } from "@reduxjs/toolkit";
import { QuestionState } from "../../../store"; // Assuming QuestionState is defined in store.js

const initialState: QuestionState = {
    questions: [],
    question: {
        _id: "test",
        title: "New Question",
        points: 10,
        questionType: "multipleChoice",
        question: "New Question",
        correctAnswers: [""],
        choices: ["Choice 1"],
        quizId: "test",
        quizOrder: 1,
        createdAt: "2021-01-01T00:00:00.000Z"
    },
}

const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
        addQuestion: (state, action) => {
            state.questions = [...state.questions, action.payload];
        },
        deleteQuestion: (state, action) => {
            state.questions = state.questions.filter(
                (question) => question._id !== action.payload
            );
        },
        updateQuestion: (state, action) => {
            state.questions = state.questions.map((question) => {
                if (question._id === action.payload._id) {
                    return action.payload;
                } else {
                    return question;
                }
            });
        },
        setQuestion: (state, action) => {
            state.question = action.payload;
        }
    }
});

export const { setQuestions, addQuestion, deleteQuestion, updateQuestion, setQuestion } = questionsSlice.actions;

export default questionsSlice.reducer;