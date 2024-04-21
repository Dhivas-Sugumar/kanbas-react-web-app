import { useDispatch, useSelector } from "react-redux";
import { KanbasState, Question } from "../../../store";
import ChoiceDisplay from "./ChoiceDisplay";
import MultipleBlanksDisplay from "./MultipleBlanksDisplay";
import { deleteQuestion, setQuestion } from "./reducer";
import * as client from "./client";
import { setQuiz } from "../reducer";

const QuestionDisplay = ({question, isPreview} : {question: Question, isPreview: boolean}) => {
  const dispatch = useDispatch();
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);

  const handleDelete = () => {
    client.deleteQuestion(question._id);
    dispatch(deleteQuestion(question._id));
    dispatch(setQuiz({...quiz, numberOfQuestions: quiz.numberOfQuestions - 1, points: quiz.points - question.points}))
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
      {isPreview ? <></>
      :
      <>
      <button className="btn btn-success" onClick={() => dispatch(setQuestion(question))}>Edit</button>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </>}
    </div> 
  )
}
export default QuestionDisplay;