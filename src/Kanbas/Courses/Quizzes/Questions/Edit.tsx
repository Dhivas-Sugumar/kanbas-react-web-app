import { useState } from "react";
import { KanbasState, Question } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import MultipleBlanksEdit from "./MultipleBlanksEdit";
import MultipleChoiceEdit from "./MultipleChoiceEdit";
import TrueFalseEdit from "./TrueFalseEdit";
import { setQuestion } from "./reducer";
import { Dropdown } from "react-bootstrap";

const EditQuestion = () => {
    const question: Question = useSelector((state: KanbasState) => state.questionsReducer.question);
    const dispatch = useDispatch();
    // Functionality in here
    console.log(question.questionType);
    return (
        <div>
              <Dropdown onSelect={(e) => dispatch(setQuestion({...question, questionType: e}))}>
      <Dropdown.Toggle variant="primary" id="quiz-type-dropdown">
        {question.questionType ? question.questionType : 'Select Quiz Type'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="trueFalse">True/False</Dropdown.Item>
        <Dropdown.Item eventKey="multipleChoice">Multiple Choice</Dropdown.Item>
        <Dropdown.Item eventKey="multipleBlanks">Multiple Blanks</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <label>
        Title:
        <input type="text" value={question.title} 
        onChange={(e)=> dispatch(setQuestion({...question, title: e.target.value}))}/>
      </label>
      <label>
        Points:
        <input type="number" value={question.points} 
        onChange={(e) => dispatch(setQuestion({...question, points: Number(e.target.value)}))}/>
      </label>
      <label>
        Question:
        <textarea value={question.question} 
        onChange={(e) => dispatch(setQuestion({...question, question: e.target.value}))}/>
      </label>  
      {question.questionType === "multipleChoice" && <MultipleChoiceEdit question={question} />}
      {question.questionType === "multipleBlanks" && <MultipleBlanksEdit question={question} />} 
      {question.questionType === "trueFalse" && <TrueFalseEdit question={question} />}   
      </div>
    );
}

export default EditQuestion;