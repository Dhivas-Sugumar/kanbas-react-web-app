import { useDispatch } from "react-redux";
import { Question } from "../../../store";
import { setQuestion } from "./reducer";

const MultipleBlanksEdit = ({question}: {question: Question}) => {

  const dispatch = useDispatch();
  const handleAddNewBlank = () => {
    dispatch(setQuestion({...question, choices: [...question.choices, ""], correctAnswer: [...question.correctAnswers, ""]}));
  }

  const handleRemoveBlank = (index: number) => {
    dispatch(setQuestion({...question, choices: question.choices.filter((choice, i) => i !== index)}));
  }

  const handleUpdateCorrectAnswer = (index: number, val: string) => {
    dispatch(setQuestion({...question, correctAnswer: question.correctAnswers.map((c, i) => i === index ? val : c)}));
  }

  return(
    <div>
      <ul>
        {question.correctAnswers.map((answer, index) => (
          <li key={index}>
            <input type="text" value={answer} 
            onChange={(e) => handleUpdateCorrectAnswer(index, e.target.value)}/>
            <button onClick={()=> handleRemoveBlank(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="btn btn-success" onClick={handleAddNewBlank}>Add New Blank</button>
    </div>)
}
export default MultipleBlanksEdit;