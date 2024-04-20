import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as client from "./client";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { setQuiz, setQuizById, updateQuiz } from "./reducer";
import { Button, Dropdown } from "react-bootstrap";
import DetailsEdit from "./DetailsEdit";
import EditQuestions from "./QuestionsEdit";
function QuizEditor() {
  const { courseId, quizId } = useParams();
  
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
        <Button onClick={() => setActiveTab("details")}>Details</Button>
        <Button onClick={() => setActiveTab("questions")}>Questions</Button>
      </div>
      {activeTab === "details" && (
        <DetailsEdit/>
      )}
      {/* Questions tab */}
      {activeTab === "questions" && (
        <div>
          <EditQuestions/>
        </div>
      )}
      {/* Buttons */}
      <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}`}>
        <Button className="mx-2" onClick={handleSave}>Save</Button>
      </Link>
      <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}`}>
        <Button className="mx-2" onClick={handleSaveAndPublish}>Save & Publish</Button>
      </Link>
      <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}`}>
        <Button className="mx-2" onClick={handleCancel}>Cancel</Button>
      </Link>
    </div>
  );
}

export default QuizEditor;
