import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import quizzesReducer from "../Courses/Quizzes/reducer";

interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: string[];
}

export interface Quiz {
  _id: string;
  title: string;
  description: string;
  quizType: "Graded Quiz" | "Practice Quiz" | "Graded Survey" | "Ungraded Survey";
  points: number;
  assignmentGroup: "Quizzes" | "Exams" | "Assignments" | "Project";
  shuffleAnswers: boolean;
  timeLimit: number;
  multipleAttempts: boolean;
  showCorrectAnswers: boolean;
  accessCode: string;
  oneQuestionAtATime: boolean;
  webcamRequired: boolean;
  lockQuestionsAfterAnswering: boolean;
  dueDate: string;
  availableDate: string;
  untilDate: string;
  course: string; // Assuming course ID or name here
  published: boolean;
}

export interface ModuleState {
  modules: Module[];
  module: Module;

}

export interface QuizState {
  quizzes: Quiz[];
  quiz: Quiz;
}

export interface KanbasState {
  modulesReducer: {
    modules: Module[];
    module: Module;
  };
  quizzesReducer: {
    quizzes: Quiz[];
    quiz: Quiz;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    quizzesReducer
  }
});


export default store;