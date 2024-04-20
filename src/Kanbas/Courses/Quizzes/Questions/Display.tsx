import { Question } from "../../../store";
import ChoiceDisplay from "./ChoiceDisplay";
import MultipleBlanksDisplay from "./MultipleBlanksDisplay";

const QuestionDisplay = ({question} : {question: Question}) => {
  return (
    <div>
      <h3>{question.title}</h3>
      <p>{question.question}</p>
      {question.questionType === "multipleChoice" && (
        <ChoiceDisplay question={question} />
      )}
      {question.questionType === "multipleBlanks" && (
        <MultipleBlanksDisplay question={question} />
      )}
      {question.questionType === "trueFalse" && (
        <ChoiceDisplay question={question} />
      )}
    </div>
  )
}
export default QuestionDisplay;