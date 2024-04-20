import { Question } from "../../../store";

const MultipleBlanksDisplay = (question : Question) => {
  return(
    <div>
      <ul>
        {question.choices.map((choice) => {
          return (
            <input key={choice} type="text" />
          );
        })}
      </ul>
    </div>
  )
}

export default MultipleBlanksDisplay;