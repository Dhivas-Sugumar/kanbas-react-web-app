import { Question } from "../../../store";

const ChoiceDisplay = (question : Question) => {
  return(
    <div>
      <ul>
        {question.choices.map((choice) => {
          return (
            <input type="radio" key={choice} name={question._id} value={choice} />
          );
        })}
      </ul>
    </div>
  )
};

export default ChoiceDisplay;