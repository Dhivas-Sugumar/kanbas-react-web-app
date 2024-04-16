import React, { useState } from "react";
import { useParams } from "react-router-dom";

function QuizEditor() {
  const { quizId } = useParams();

  // Quiz details state
  const [quizDetails, setQuizDetails] = useState({
    title: "Sample Quiz",
    description: "This is a sample quiz",
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
    dueDate: "2024-04-30",
    availableDate: "2024-04-16",
    untilDate: "2024-05-15",
  });

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
              setQuizDetails({ ...quizDetails, title: e.target.value })
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
