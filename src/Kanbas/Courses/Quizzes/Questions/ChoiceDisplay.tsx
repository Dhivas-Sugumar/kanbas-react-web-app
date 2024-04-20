import { Question } from "../../../store";

const ChoiceDisplay = ({question} : {question: Question}) => {
  return(
    <div>
      <ul>
        {question.choices.map((choice) => {
          return (
            <div>
            <input type="radio" key={choice} name={question._id} value={choice} />
            <label>{choice}</label>
            </div>
          );
        })}
      </ul>
    </div>
  )
};

export default ChoiceDisplay;