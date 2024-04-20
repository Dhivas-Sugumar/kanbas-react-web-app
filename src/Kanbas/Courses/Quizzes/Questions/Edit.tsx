import { useState } from "react";
import { KanbasState, Question } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import MultipleBlanksEdit from "./MultipleBlanksEdit";
import MultipleChoiceEdit from "./MultipleChoiceEdit";
import TrueFalseEdit from "./TrueFalseEdit";

const EditQuestion = () => {
    const question: Question = useSelector((state: KanbasState) => state.questionsReducer.question);
    const dispatch = useDispatch();
    // Functionality in here
    return (
        <div>
      <label>
        Title:
        <input type="text" value={question.title} />
      </label>
      <label>
        Points:
        <input type="number" value={question.points} />
      </label>
      <label>
        Question:
        <textarea value={question.question} />
      </label>  
      {question.questionType === "Multiple Choice" && <MultipleChoiceEdit question={question} />}
      {question.questionType === "Multiple Blanks" && <MultipleBlanksEdit question={question} />} 
      {question.questionType === "True/False" && <TrueFalseEdit question={question} />}   
      </div>
    );
}

export default EditQuestion;