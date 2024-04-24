import React, { useEffect, useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaRocket, FaTimesCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuiz,
  deleteQuiz,
  updateQuiz,
  setQuiz,
  setQuizzes,
} from "./reducer";
import { KanbasState, Quiz } from "../../store";
import * as client from "./client";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function QuizList() {
  const { courseId } = useParams();

  const navigate = useNavigate();

  const quizList = useSelector((state: KanbasState) =>
    state.quizzesReducer.quizzes
  );
  const quiz = useSelector((state: KanbasState) =>
    state.quizzesReducer.quiz
  );
  const now = new Date();
  const isQuizOpen = new Date(quiz.availableDate) <= now;
  const isQuizClosed = new Date(quiz.dueDate) <= now;
  const isQuizAvailable = isQuizOpen && !isQuizClosed;


  const handleDeleteQuiz = (quizId: string) => {
    client.deleteQuiz(quizId).then(() => {
      dispatch(deleteQuiz(quizId));
    });
  };

  const handlePublishQuiz = async (quiz: any) => {
    const newQuiz = { ...quiz, published: !quiz.published };
    await client.updateQuiz(newQuiz);
    dispatch(updateQuiz(newQuiz));
  }

  const handleEditQuiz = () => {
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/edit`);
  }

  const quizLineItemDateHelper = (quiz: Quiz) => {
    if (isQuizAvailable) {
      return `Available | Due ${quiz.dueDate}`;
    }
    if(!isQuizOpen) { 
      return `Not Available until ${quiz.availableDate}`;
    }
    if (isQuizClosed) {
      return `Closed | Due ${quiz.dueDate}`;
    }
    
  }

  const dispatch = useDispatch();


  return (
    <>
      <ul className="list-group wd-quizzes">
        {quizList
          .filter((quiz) => quiz.course === courseId)
          .map((quiz, index) => (
            <li
              className="list-group-item"
              key={index}
            >
              <div>
                <FaRocket />
                <div>
                <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`}>
                    {quiz.title} </Link>
                <div>
                  <span>
                    {`${quizLineItemDateHelper(quiz)} | ${quiz.questions.reduce((acc, question) => acc + question.points, 0)} pts | ${quiz.questions.length} questions`}
                  </span>
                </div>
                </div>
                <span className="float-end">
                  {quiz.published ? <FaCheckCircle className="text-success" /> : <FaTimesCircle />}
                  <div className="wd-modules-header-buttons-container">
      <Dropdown className="ml-auto">
        <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
          <FaEllipsisV />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleEditQuiz}>Edit</Dropdown.Item>
          <Dropdown.Item onClick={() => {handleDeleteQuiz(quiz._id)}}>Delete</Dropdown.Item>
          <Dropdown.Item onClick={() => {handlePublishQuiz(quiz)}}>{quiz.published ? "UnPublish" : "Publish"}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
                </span>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default QuizList;
