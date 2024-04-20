import { Question } from "../../../store";

const MultipleBlanksDisplay = ({question} : {question: Question}) => {
  return(
<div className="container">
  <ul className="list-group">
    {question.choices.map((choice) => {
      return (
        <li key={choice} className="list-group-item">
          <input type="text" className="form-control" />
        </li>
      );
    })}
  </ul>
</div>
  )
}

export default MultipleBlanksDisplay;