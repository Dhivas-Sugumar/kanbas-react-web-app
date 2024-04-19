import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as client from "./client";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { setQuiz, setQuizById, updateQuiz } from "./reducer";
import { Dropdown } from "react-bootstrap";
import DetailsEdit from "./DetailsEdit";
function QuizEditor() {
  const { courseId, quizId } = useParams();
  // Quiz details state
  // const [quizDetails, setQuizDetails] = useState<any>()

  // useEffect(() => {
  //   const quiz = client.findQuizById(quizId);

  // }, [quizId]);

  
  const quizDetails = useSelector((state: KanbasState) => state.quizzesReducer.quiz);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setQuizById(quizId));
  }, [quizId]);

  // Tab state
  const [activeTab, setActiveTab] = useState("details");

  const handleSave = () => {
    client.updateQuiz(quizDetails);
    dispatch(updateQuiz(quizDetails));
  };

  const handleSaveAndPublish = () => {
    // Implement save and publish functionality
    // Save quiz details to the database
    // Publish quiz
    // Navigate to Quiz List screen
    dispatch(setQuizById({ ...quizDetails, published: true }));
    handleSave();
  };

  const handleCancel = () => {
    dispatch(setQuizById(quizId));
  };

  

  return (
    <div>
      <h2>Quiz Editor</h2>
      {/* Tab navigation */}
      <div>
        <button onClick={() => setActiveTab("details")}>Details</button>
        <button onClick={() => setActiveTab("questions")}>Questions</button>
      </div>
      {activeTab === "details" && (
        <DetailsEdit/>
      )}
      {/* Questions tab */}
      {activeTab === "questions" && (
        <div>
          {/* Questions editor */}
          <p>Questions editor goes here...</p>
        </div>
      )}
      {/* Buttons */}
      <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}`}>
        <button onClick={handleSave}>Save</button>
      </Link>
      <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}`}>
        <button onClick={handleSaveAndPublish}>Save & Publish</button>
      </Link>
      <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}`}>
        <button onClick={handleCancel}>Cancel</button>
      </Link>
    </div>
  );
}

export default QuizEditor;
