import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as questionsClient from "./Questions/client";
import * as client from "./client";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "./Questions/reducer";
import { Button } from "react-bootstrap";
import { setQuizById, updateQuiz } from "./reducer";
import { FaCheckCircle, FaPenFancy } from "react-icons/fa";
import { KanbasState } from "../../store";
function QuizDetails() {
  const { quizId } = useParams();
  
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const fetchQuestions = async (quizId?: string) => {
    const questions = await questionsClient.findQuestionsForQuiz(quizId);
    dispatch(setQuestions(questions));
  }

  useEffect(() => {
    dispatch(setQuizById(quizId))
    fetchQuestions(quizId);
  }, [quizId]);

  const handlePublishQuiz = async () => {
    const published = !quiz.published;
    await client.updateQuiz({...quiz, published: published});
    dispatch(updateQuiz({...quiz, published: published}));
  }

  const handlePreview = () => {
    // Navigate to Quiz Preview screen
  };

  const handleEdit = () => {
    navigator(`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}/edit`);
  };

  return (
    <div>
      {/* Buttons */}
      <Button className="btn btn-success mx-2" onClick={handlePublishQuiz}> <FaCheckCircle />  Publish</Button>
      <Link to={`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}/preview`}>
        <Button className="mx-2" onClick={handlePreview}>Preview</Button>
      </Link>
      <Link to={`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}/edit`}>
        <Button className="mx-2"> <FaPenFancy /> Edit</Button>
      </Link>
      <hr />
      <h2>{quiz.title}</h2>
      {/* Display quiz properties */}
      <p><strong>Quiz Type:</strong> {quiz.quizType}</p>
      <p><strong>Points:</strong> {quiz.points}</p>
      <p><strong>Assignment Group:</strong> {quiz.assignmentGroup}</p>
      <p><strong>Shuffle Answers:</strong> {quiz.shuffleAnswers ? "Yes" : "No"}</p>
      <p><strong>Time Limit:</strong> {quiz.timeLimit}</p>
      <p><strong>Multiple Attempts:</strong> {quiz.multipleAttempts ? "Yes" : "No"}</p>
      <p><strong>Show Correct Answers:</strong> {quiz.showCorrectAnswers ? "Yes" : "No"}</p>
      <p><strong>Access Code:</strong> {quiz.accessCode}</p>
      <p><strong>One Question at a Time:</strong> {quiz.oneQuestionAtATime ? "Yes" : "No"}</p>
      <p><strong>Webcam Required:</strong> {quiz.webcamRequired ? "Yes" : "No"}</p>
      <p><strong>Lock Questions After Answering:</strong> {quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</p>
      <p><strong>Due Date:</strong> {quiz.dueDate.toLocaleString()}</p>
      <p><strong>Available Date:</strong> {quiz.availableDate.toLocaleString()}</p>
      <p><strong>Until Date:</strong> {quiz.untilDate.toLocaleString()}</p>

    </div>
  );
}

export default QuizDetails;

