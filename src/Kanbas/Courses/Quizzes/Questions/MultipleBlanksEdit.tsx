import { useDispatch } from "react-redux";
import { Question } from "../../../store";
import { setQuestion } from "./reducer";

const MultipleBlanksEdit = ({question}: {question: Question}) => {

  const dispatch = useDispatch();
  const handleAddNewBlank = () => {
    dispatch(setQuestion({...question, choices: [...question.choices, ""], correctAnswers: [...question.correctAnswers, ""]}));
  }

  const handleRemoveBlank = (index: number) => {
    dispatch(setQuestion({...question, choices: question.choices.filter((choice, i) => i !== index),
    correctAnswers: question.correctAnswers.filter((c, i) => i !== index)}));
  }

  const handleUpdateCorrectAnswer = (index: number, val: string) => {
    dispatch(setQuestion({...question, correctAnswers: question.correctAnswers.map((c, i) => i === index ? val : c)}));
  }

  return(
    <div>
      <ul className="list-group">
        {question.correctAnswers.map((answer, index) => (
          <li key={index} className="list-group-item">
            <div className="input-group">
              <input type="text" className="form-control" value={answer} 
                onChange={(e) => handleUpdateCorrectAnswer(index, e.target.value)} />
              <div className="input-group-append">
                <button className="btn btn-danger" type="button" onClick={() => handleRemoveBlank(index)}>
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn btn-success mt-3" onClick={handleAddNewBlank}>Add New Blank</button>
    </div>
    )
}
export default MultipleBlanksEdit;