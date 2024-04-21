import { useState } from "react";
import { KanbasState, Question } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import MultipleBlanksEdit from "./MultipleBlanksEdit";
import MultipleChoiceEdit from "./MultipleChoiceEdit";
import TrueFalseEdit from "./TrueFalseEdit";
import { setQuestion } from "./reducer";
import { Dropdown } from "react-bootstrap";
import Editor from "react-simple-wysiwyg";

const EditQuestion = () => {
    const question: Question = useSelector((state: KanbasState) => state.questionsReducer.question);
    const dispatch = useDispatch();
    
    return (
        <div>
              <Dropdown onSelect={(e) => dispatch(setQuestion({...question, questionType: e, correctAnswer: [], choices: []}))}>
      <Dropdown.Toggle variant="primary" id="quiz-type-dropdown">
        {question.questionType ? question.questionType : 'Select Quiz Type'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="trueFalse">True/False</Dropdown.Item>
        <Dropdown.Item eventKey="multipleChoice">Multiple Choice</Dropdown.Item>
        <Dropdown.Item eventKey="multipleBlanks">Multiple Blanks</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <div className="question-editor">
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={question.title}
          onChange={(e) =>
            dispatch(setQuestion({ ...question, title: e.target.value }))
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="points">Points:</label>
        <input
          type="number"
          className="form-control"
          id="points"
          value={question.points}
          onChange={(e) =>
            dispatch(setQuestion({ ...question, points: Number(e.target.value) }))
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="question">Question:</label>
        <Editor
          value={question.question}
          onChange={(e) =>
            dispatch(setQuestion({ ...question, question: e.target.value }))
          }
        />
      </div>
    </div>
      {question.questionType === "multipleChoice" && <MultipleChoiceEdit question={question} />}
      {question.questionType === "multipleBlanks" && <MultipleBlanksEdit question={question} />} 
      {question.questionType === "trueFalse" && <TrueFalseEdit question={question} />}   
      </div>
    );
}

export default EditQuestion;