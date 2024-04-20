import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import quizzesReducer from "../Courses/Quizzes/reducer";
import questionsReducer from "../Courses/Quizzes/Questions/reducer";

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
  dueDate: Date;
  availableDate: Date;
  untilDate: Date;
  course: string; // Assuming course ID or name here
  published: boolean;
}

export interface Question {
  _id: string;
  title: string;
  points: number;
  questionType: "multipleChoice" | "trueFalse" | "multipleBlanks";
  question: string;
  correctAnswers: string[];
  choices: string[];
  quizId: string;
  quizOrder: number;
}

export interface ModuleState {
  modules: Module[];
  module: Module;

}

export interface QuizState {
  quizzes: Quiz[];
  quiz: Quiz;
}

export interface QuestionState {
  questions: Question[];
  question: Question;
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
  questionsReducer: {
    questions: Question[];
    question: Question;
  }
}
const store = configureStore({
  reducer: {
    modulesReducer,
    quizzesReducer,
    questionsReducer,

  }
});


export default store;