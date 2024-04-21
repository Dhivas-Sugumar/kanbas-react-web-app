import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import QuestionDisplay from "./Questions/Display";
import EditQuestion from "./Questions/Edit";
import { addQuestion, setQuestion, updateQuestion } from "./Questions/reducer";
import * as client from "./client";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import { setQuiz, updateQuiz } from "./reducer";

const EditQuestions = () => {
    const {quizId} = useParams();
    const dispatch = useDispatch();
    // const questions = useSelector((state: KanbasState) => state.questionsReducer.questions);
    const question = useSelector((state: KanbasState) => state.questionsReducer.question);
    const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);

    const handleNewQuestion = async () => {
        // const res = await client.createQuestion(quizId, question)
        // dispatch(addQuestion(res));
        // console.log(pointsSum())
        // dispatch(setQuiz({...quiz, numberOfQuestions: quiz.numberOfQuestions + 1, points: quiz.points + question.points}))
        // dispatch(updateQuiz({...quiz, numberOfQuestions: quiz.numberOfQuestions + 1, points: quiz.points + question.points}))
        dispatch(setQuiz({...quiz, questions: [...quiz.questions, {...question, createdAt: new Date().toISOString()}]}))
        dispatch(setQuestion({title: "", question: "", questionType: "multipleChoice", points: 0, choices: [], blanks: []}))
    }

    // const pointsSum = () => {
    //     let sum = 0;
    //     questions.forEach(question => {
    //         sum += question.points;
    //     });
    //     return sum;
    // }



    const handleUpdateQuestion = async () => {
        // const res = await client.updateQuestion(question);
        // dispatch(updateQuestion(question))
        // dispatch(setQuiz({...quiz, points: pointsSum()}))
        // dispatch(updateQuiz({...quiz, points: pointsSum()}))
        dispatch(setQuiz({...quiz, questions: quiz.questions.map(q => q.createdAt === question.createdAt ? question : q)}))
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
            <EditQuestion/>
            <Button className="btn btn-success my-2" onClick={handleNewQuestion}>New Question</Button>
        </div>
    );
}
export default EditQuestions;