import { FaArrowDown, FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import QuizList from "./List";
import "./index.css";     
import "../../styles.css";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import QuizEditor from "./Edit";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import QuizDetails from "./Details";
import * as client from "./client";
import { useSelector, useDispatch } from "react-redux";
import { addQuiz } from "./reducer";
import { KanbasState } from "../../store";


export const QuizzesHeaderButtons = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = () => {
    // Navigate to Quiz Details screen
  };

  const handleDelete = () => {
    // Remove the quiz
    // Stay in the Quiz List screen
  };

  const handlePublish = () => {
    // Publish or unpublish the quiz
  };
  const quizDetails = useSelector((state: KanbasState) => state.quizzesReducer.quiz);

  const handleAddQuiz = () => {
    client.createQuiz(courseId,{...quizDetails, title: "New Quiz", questions: []}).then((quiz) => {
      dispatch(addQuiz(quiz));
      navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/edit`);
    });
  };

  return (
    <div className="wd-modules-header-buttons-container">
      <button
        style={{ backgroundColor: "red", color: "white" }}
        className="wd-modules-header-button ml-auto"
        onClick={handleAddQuiz}
      >
        <FaPlus /> Quiz
      </button>
      <Dropdown className="ml-auto">
        <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
          <FaEllipsisV />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleEdit}>Edit</Dropdown.Item>
          <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
          <Dropdown.Item onClick={handlePublish}>Publish</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

function Quizzes() {
  return (
    <div>
      <QuizzesHeaderButtons />
      <h2>Quizzes</h2>
      <QuizList />
    </div>
  );
}
export default Quizzes;

