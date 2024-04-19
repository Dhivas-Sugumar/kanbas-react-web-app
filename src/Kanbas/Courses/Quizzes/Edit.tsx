import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as client from "./client";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { setQuizById, updateQuiz } from "./reducer";
function QuizEditor() {
  const { quizId } = useParams();

  // Quiz details state
  // const [quizDetails, setQuizDetails] = useState<any>()

  // useEffect(() => {
  //   const quiz = client.findQuizById(quizId);

  // }, [quizId]);

  const quizDetails = useSelector((state: KanbasState) => state.quizzesReducer.quiz);
  const dispatch = useDispatch();
  dispatch(setQuizById(quizId));

  // Tab state
  const [activeTab, setActiveTab] = useState("details");

  const handleSave = () => {
    // Implement save functionality
    // Save quiz details to the database
    // Navigate to Quiz Details screen
  };

  const handleSaveAndPublish = () => {
    // Implement save and publish functionality
    // Save quiz details to the database
    // Publish quiz
    // Navigate to Quiz List screen

  };

  const handleCancel = () => {
    // Navigate to Quiz List screen without saving
  };

  return (
    <div>
      <h2>Quiz Editor</h2>
      {/* Tab navigation */}
      <div>
        <button onClick={() => setActiveTab("details")}>Details</button>
        <button onClick={() => setActiveTab("questions")}>Questions</button>
      </div>
      {/* Details tab */}
      {activeTab === "details" && (
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={quizDetails.title}
            onChange={(e) =>
              dispatch(updateQuiz({ ...quizDetails, title: e.target.value }))
            }
          />
          {/* Other input fields for quiz details */}
        </div>
      )}
      {/* Questions tab */}
      {activeTab === "questions" && (
        <div>
          {/* Questions editor */}
          <p>Questions editor goes here...</p>
        </div>
      )}
      {/* Buttons */}
      <button onClick={handleSave}>Save</button>
      <button onClick={handleSaveAndPublish}>Save and Publish</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default QuizEditor;
