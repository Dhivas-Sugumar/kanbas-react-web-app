import React, { useEffect, useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaRocket } from "react-icons/fa";
import { useParams } from "react-router";
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
  console.log("Course ID", courseId);
  useEffect(() => {
    console.log("Finding quizzes for course", courseId);
    // client.findQuizzesForCourse(courseId)
    //   .then((quizzes) =>
    //     dispatch(setQuizzes(quizzes))
    //   );
  }, [courseId]);

  const quizList = useSelector((state: KanbasState) =>
    state.quizzesReducer.quizzes
  );
  const quiz = useSelector((state: KanbasState) =>
    state.quizzesReducer.quiz
  );

  const handleAddQuiz = () => {
    client.createQuiz(courseId, quiz).then((quiz) => {
      dispatch(addQuiz(quiz));
    });
  };
  const handleDeleteQuiz = (quizId: string) => {
    client.deleteQuiz(quizId).then(() => {
      dispatch(deleteQuiz(quizId));
    });
  };
  const handleUpdateQuiz = async () => {
    
  };

  const handlePublishQuiz = async (quiz: any) => {
    const newQuiz = { ...quiz, published: !quiz.published };
    await client.updateQuiz(newQuiz);
    dispatch(updateQuiz(newQuiz));
  }

  const handleEditQuiz = () => {
    // Navigate to Quiz Details screen
  }

  const quizLineItemDateHelper = (quiz: Quiz) => {
    const now = new Date();
    const isQuizOpen = new Date(quiz.availableDate) <= now;
    const isQuizClosed = new Date(quiz.dueDate) <= now;
    const isQuizAvailable = isQuizOpen && !isQuizClosed;
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
        <li className="list-group-item">
          <button onClick={handleAddQuiz}>Add Quiz</button>
          <button onClick={handleUpdateQuiz}>Update Quiz</button>
          <input
            value={quiz.title}
            onChange={(e) =>
              dispatch(setQuiz({ ...quiz, title: e.target.value }))
            }
          />
          <textarea
            value={quiz.description}
            onChange={(e) =>
              dispatch(setQuiz({ ...quiz, description: e.target.value }))
            }
          />
        </li>

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
                    {`${quizLineItemDateHelper(quiz)} | ${quiz.points} pts | questions`}
                  </span>
                </div>
                </div>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <div className="wd-modules-header-buttons-container">
      <Dropdown className="ml-auto">
        <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
          <FaEllipsisV />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleUpdateQuiz}>Edit</Dropdown.Item>
          <Dropdown.Item onClick={() => {handleDeleteQuiz(quiz._id)}}>Delete</Dropdown.Item>
          <Dropdown.Item onClick={() => {handlePublishQuiz(quiz)}}>Publish</Dropdown.Item>
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
