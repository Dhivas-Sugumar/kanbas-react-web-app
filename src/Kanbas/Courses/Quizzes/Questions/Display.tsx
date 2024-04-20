import { useDispatch } from "react-redux";
import { Question } from "../../../store";
import ChoiceDisplay from "./ChoiceDisplay";
import MultipleBlanksDisplay from "./MultipleBlanksDisplay";
import { deleteQuestion, setQuestion } from "./reducer";
import * as client from "./client";

const QuestionDisplay = ({question} : {question: Question}) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    client.deleteQuestion(question._id);
    dispatch(deleteQuestion(question._id));
  }

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
      <button className="btn btn-success" onClick={() => dispatch(setQuestion(question))}>Edit</button>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div> 
  )
}
export default QuestionDisplay;