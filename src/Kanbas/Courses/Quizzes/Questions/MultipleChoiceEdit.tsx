import { useDispatch } from "react-redux";
import { Question } from "../../../store";
import { setQuestion } from "./reducer";

const MultipleChoiceEdit = ({question}: {question: Question}) => {

  const dispatch = useDispatch();

  const handleAddNewChoice = () => {
    dispatch(setQuestion({...question, choices: [...question.choices, ""]}));
  }

  const handleMarkAsCorrect = (index: number) => {
    dispatch(setQuestion({...question, correctAnswers: [question.choices[index]]}));
  }

  const handleRemoveChoice = (index: number) => {
    const answer = question.choices[index];
    dispatch(setQuestion({...question, correctAnswer: question.correctAnswers.filter((choice, i) => answer=== choice),
       choices: question.choices.filter((choice, i) => i !== index)}));
  }
  return(
    <div>
    <ul className="list-group">
      {question.choices.map((choice, index) => (
        <li key={index} className="list-group-item d-flex align-items-center">
          <input
            type="text"
            className="form-control mr-3"
            value={choice}
            onChange={(e) =>
              dispatch(setQuestion({
                ...question,
                choices: question.choices.map((c, i) => i === index ? e.target.value : c)
              }))
            }
          />
          {choice === question.correctAnswers[0] ? (
            <span className="badge badge-success mr-3">Correct</span>
          ) : (
            <button
              type="button"
              className="btn btn-primary mr-3"
              onClick={() => handleMarkAsCorrect(index)}
            >
              Mark as Correct
            </button>
          )}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleRemoveChoice(index)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
    <button className="btn btn-success mt-3" onClick={handleAddNewChoice}>Add New Choice</button>
  </div>
    )
}

export default MultipleChoiceEdit;