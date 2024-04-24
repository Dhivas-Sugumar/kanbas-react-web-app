import { useDispatch, useSelector } from "react-redux";
import { KanbasState, Question } from "../../../store";
import ChoiceDisplay from "./ChoiceDisplay";
import MultipleBlanksDisplay from "./MultipleBlanksDisplay";
import { deleteQuestion, setQuestion } from "./reducer";
import * as client from "./client";
import { setQuiz, updateQuiz } from "../reducer";

const QuestionDisplay = ({ question, isPreview }: { question: Question, isPreview: boolean }) => {
  const dispatch = useDispatch();
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);

  const handleDelete = () => {
    dispatch(setQuiz({ ...quiz, questions: quiz.questions.filter(q => q.createdAt !== question.createdAt) }))
  }

  return (
    <div className="card mt-2" style={{ marginRight: '100ox' }}>
      <div className='card-header'>
        <div className="row">
        <div className="col">
          <h3>{question.title}</h3>
          <p>Points: {question.points}</p>
        </div>
        <div className="col-auto">
          {isPreview ? <></>
            :
            <>
              <button className="btn btn-success" onClick={() => dispatch(setQuestion(question))}>Edit</button>
              <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </>}
        </div>
        </div>
      </div>
      <div className='card-body'>
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
    </div>
  )
}
export default QuestionDisplay;