import { useState } from "react";
import { KanbasState, Question } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import MultipleBlanksEdit from "./MultipleBlanksEdit";
import MultipleChoiceEdit from "./MultipleChoiceEdit";
import TrueFalseEdit from "./TrueFalseEdit";

const EditQuestion = () => {
    const question = useSelector((state: KanbasState) => state.questionsReducer.quiz);
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
      {question.type === "multiple_choice" && <MultipleChoiceEdit  />}
      {question.type === "multiple_blanks" && <MultipleBlanksEdit question={question} />} 
      {question.type === "true_false" && <TrueFalseEdit />}   
      </div>
    );
}

export default EditQuestion;