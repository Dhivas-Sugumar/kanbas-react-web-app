import React, { useEffect, useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuiz,
  deleteQuiz,
  updateQuiz,
  setQuiz,
  setQuizzes,
} from "./reducer";
import { KanbasState } from "../../store";
import * as client from "./client";

function QuizList() {
  const { courseId } = useParams();
  console.log("Course ID", courseId);
  useEffect(() => {
    console.log("Finding quizzes for course", courseId);
    client.findQuizzesForCourse(courseId)
      .then((quizzes) =>
        dispatch(setQuizzes(quizzes))
      );
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
    await client.updateQuiz(quiz);
    dispatch(updateQuiz(quiz));
  };

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
                <FaEllipsisV className="me-2" />
                {quiz.title}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
                <button onClick={() => handleDeleteQuiz(quiz._id)}>
                  Delete
                </button>
                <button onClick={() => dispatch(setQuiz(quiz))}>Edit</button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default QuizList;
