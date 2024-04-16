import { FaArrowDown, FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import QuizList from "./List";
import "./index.css";     
import "../../styles.css";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import QuizEditor from "./Edit";
import { Route, Routes } from "react-router-dom";
import QuizDetails from "./Details";

export const QuizzesHeaderButtons = () => {
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

  return (
    <div className="wd-modules-header-buttons-container">
      <button
        style={{ backgroundColor: "red", color: "white" }}
        className="wd-modules-header-button ml-auto"
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

