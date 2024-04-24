import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import QuestionDisplay from "./Questions/Display";
import EditQuestion from "./Questions/Edit";
import { addQuestion, setQuestion, updateQuestion } from "./Questions/reducer";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import { setQuiz, updateQuiz } from "./reducer";
import { create } from "domain";

const EditQuestions = () => {
    const {quizId} = useParams();
    const dispatch = useDispatch();
    const question = useSelector((state: KanbasState) => state.questionsReducer.question);
    const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);

    const handleNewQuestion = () => {
        dispatch(setQuiz({...quiz, questions: [...quiz.questions, {...question, createdAt: new Date().toISOString()}]}))
        dispatch(setQuestion({title: "", question: "", questionType: "multipleChoice", points: 0, choices: [], blanks: [], createdAt: ''}))
    }

    const handleUpdateQuestion = () => {
        dispatch(setQuiz({...quiz, questions: quiz.questions.map(q => q.createdAt === question.createdAt ? question : q)}))
        dispatch(setQuestion({title: "", question: "", questionType: "multipleChoice", points: 0, choices: [], blanks: [], createdAt: ''}))
    }
    
    return (
        <div>
            <ul>
                {quiz.questions.map((question, index) => (
                    <li key={index}>
                        <QuestionDisplay question={question} isPreview={false}/>
                    </li>
                ))}
            </ul>
            <div className="card mt-2" style={{marginRight: '200px'}}>
                <div className='card-header'>
                    <h3>New Question</h3>
                </div>
                <div className='card-body'>
                <EditQuestion/>
                </div>
            </div>
            <Button className="btn btn-success my-2" onClick={handleNewQuestion}>New Question</Button>
            <Button className="btn btn-primary my-2" onClick={handleUpdateQuestion} disabled={question.createdAt === ''}>Update Question</Button>
        </div>
    );
}
export default EditQuestions;