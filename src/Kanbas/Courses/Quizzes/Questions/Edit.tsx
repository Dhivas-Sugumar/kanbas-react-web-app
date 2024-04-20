import { useState } from "react";
import { KanbasState, Question } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import MultipleBlanksEdit from "./MultipleBlanksEdit";
import MultipleChoiceEdit from "./MultipleChoiceEdit";
import TrueFalseEdit from "./TrueFalseEdit";
import { setQuestion } from "./reducer";

const EditQuestion = () => {
    const question: Question = useSelector((state: KanbasState) => state.questionsReducer.question);
    const dispatch = useDispatch();
    // Functionality in here
    return (
        <div>
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
      {question.questionType === "Multiple Choice" && <MultipleChoiceEdit question={question} />}
      {question.questionType === "Multiple Blanks" && <MultipleBlanksEdit question={question} />} 
      {question.questionType === "True/False" && <TrueFalseEdit question={question} />}   
      </div>
    );
}

export default EditQuestion;