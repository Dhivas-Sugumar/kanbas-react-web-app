import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import QuestionDisplay from "./Questions/Display";
import EditQuestion from "./Questions/Edit";
import { addQuestion, updateQuestion } from "./Questions/reducer";
import * as client from "./Questions/client";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";

const EditQuestions = () => {
    const {quizId} = useParams();
    const dispatch = useDispatch();
    const questions = useSelector((state: KanbasState) => state.questionsReducer.questions);
    const question = useSelector((state: KanbasState) => state.questionsReducer.question);

    const handleNewQuestion = async () => {
        const res = await client.createQuestion(quizId, question)
        dispatch(addQuestion(res));
    }

    const handleUpdateQuestion = async () => {
        const res = await client.updateQuestion(question);
        dispatch(updateQuestion(question))
    }
    console.log(questions);
    return (
        <div>
            <ul>
                {questions.map((question, index) => (
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