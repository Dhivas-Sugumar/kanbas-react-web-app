import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { KanbasState } from '../../store';
import * as client from './Questions/client';
import { setQuestions } from './Questions/reducer';
import QuestionDisplay from './Questions/Display';

const PreviewQuiz = () => {
  const { quizId } = useParams();
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);
  const dispatch = useDispatch();
  const questions = useSelector((state: KanbasState) => state.questionsReducer.questions);

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isOneQuestionAtATime, setIsOneQuestionAtATime] = useState<boolean>(false);

  function shuffleArray(oldArray: any[]) {
    const array = [...oldArray];
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const displayQuestions = quiz.shuffleAnswers ? shuffleArray(questions) : questions;

  useEffect(() => {
    setIsOneQuestionAtATime(quiz.oneQuestionAtATime);
  }, [quiz]);

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  return (
    <div>
      <h2>{quiz.title}</h2>
      {isOneQuestionAtATime ? (
        <div>
          <h3>{displayQuestions[currentQuestion]?.title}</h3>
          <QuestionDisplay question={questions[currentQuestion]} isPreview={true}/>
          <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
            Previous
          </button>
          <button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>
            Next
          </button>
        </div>
      ) : (
        <ul>
          {displayQuestions.map((question) => (
            <li key={question._id}>
              <QuestionDisplay question={question} isPreview={true}/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PreviewQuiz;
