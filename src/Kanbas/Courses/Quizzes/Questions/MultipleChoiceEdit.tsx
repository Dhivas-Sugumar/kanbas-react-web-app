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
    dispatch(setQuestion({...question, correctAnswer: question.correctAnswer.filter((choice, i) => answer=== choice),
       choices: question.choices.filter((choice, i) => i !== index)}));
  }
  return(
    <div>
      <ul>
        {question.choices.map((choice, index) => (
          <li key={index}>
            <input type="text" value={choice} 
            onChange={(e) => dispatch(setQuestion({...question, choices: question.choices.map((c, i) => i === index ? e.target.value : c)}))}/>
            {choice === question.correctAnswer[0] ? <span>Correct</span> : <button onClick={()=> handleMarkAsCorrect(index)}>Mark as Correct</button>}
            <button onClick={()=> handleRemoveChoice(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>)
}

export default MultipleChoiceEdit;