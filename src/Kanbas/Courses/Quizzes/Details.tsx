import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findQuizById } from "./client";
import * as questionsClient from "./Questions/client";
import { useDispatch } from "react-redux";
import { setQuestions } from "./Questions/reducer";
function QuizDetails() {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState<any>({ _id: "" });
  const fetchQuiz = async (quizId?: string) => {
    const quiz = await findQuizById(quizId);
    setQuiz(quiz);
  }

  const dispatch = useDispatch();

  const fetchQuestions = async (quizId?: string) => {
    const questions = await questionsClient.findQuestionsForQuiz(quizId);
    dispatch(setQuestions(questions));
  }

  useEffect(() => {
    fetchQuiz(quizId);
    fetchQuestions(quizId);
  }, [quizId]);

  const handlePublish = () => {
    // Implement publish functionality
  };

  const handlePreview = () => {
    // Navigate to Quiz Preview screen
  };

  const handleEdit = () => {
    
  };

  

  return (
    <div>
      <h2>Quiz Details</h2>
      {/* Display quiz properties */}
      <p>Quiz Type: {quiz.quizType}</p>
      <p>Points: {quiz.points}</p>
      <p>Assignment Group: {quiz.assignmentGroup}</p>
      <p>Shuffle Answers: {quiz.shuffleAnswers ? "Yes" : "No"}</p>
      <p>Time Limit: {quiz.timeLimit}</p>
      <p>Multiple Attempts: {quiz.multipleAttempts ? "Yes" : "No"}</p>
      <p>Show Correct Answers: {quiz.showCorrectAnswers ? "Yes" : "No"}</p>
      <p>Access Code: {quiz.accessCode}</p>
      <p>One Question at a Time: {quiz.oneQuestionAtATime ? "Yes" : "No"}</p>
      <p>Webcam Required: {quiz.webcamRequired ? "Yes" : "No"}</p>
      <p>Lock Questions After Answering: {quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</p>
      <p>Due Date: {quiz.dueDate}</p>
      <p>Available Date: {quiz.availableDate}</p>
      <p>Until Date: {quiz.untilDate}</p>

      {/* Buttons */}
      <button onClick={handlePublish}>Publish</button>
      <button onClick={handlePreview}>Preview</button>
      <Link to={`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}/edit`}>
        <button onClick={handleEdit}>Edit</button>
      </Link>
    </div>
  );
}

export default QuizDetails;

