import { Question } from "../../../store";
import ChoiceDisplay from "./ChoiceDisplay";
import MultipleBlanksDisplay from "./MultipleBlanksDisplay";

const QuestionDisplay = (question: Question) => {
  return (
    <div>
      <h3>{question.title}</h3>
      <p>{question.question}</p>
      {question.questionType === "Multiple Choice" && (
        <ChoiceDisplay question={question} />
      )}
      {question.questionType === "Multiple Blanks" && (
        <MultipleBlanksDisplay question={question} />
      )}
      {question.questionType === "True/False" && (
        <ChoiceDisplay question={question} />
      )}
    </div>
  )
}
export default QuestionDisplay;