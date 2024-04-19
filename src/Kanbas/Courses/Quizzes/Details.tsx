import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findQuizById } from "./client";
function QuizDetails() {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState<any>({ _id: "" });
  const fetchQuiz = async (quizId?: string) => {
    const quiz = await findQuizById(quizId);
    setQuiz(quiz);
  }
  useEffect(() => {
    fetchQuiz(quizId);
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
      <p>Quiz Type: {quiz.type}</p>
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

