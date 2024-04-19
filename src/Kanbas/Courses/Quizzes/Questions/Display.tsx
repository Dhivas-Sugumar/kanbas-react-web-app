import { Question } from "../../../store";

const QuestionDisplay = ({ question }: { question: Question }) => {
  return (
    <div>
      <h3>{question.title}</h3>
      <p>{question.question}</p>
      <ul>
        {question.choices.map((choice) => {
          return (
            <li key={choice}>
              {choice}
            </li>
          );
        })}
      </ul>
    </div>
  )
}
export default QuestionDisplay;