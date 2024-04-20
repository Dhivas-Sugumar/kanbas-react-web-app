import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import QuestionDisplay from "./Questions/Display";
import EditQuestion from "./Questions/Edit";
import { addQuestion } from "./Questions/reducer";
import * as client from "./Questions/client";
import { useParams } from "react-router";

const EditQuestions = () => {
    const {quizId} = useParams();
    const dispatch = useDispatch();
    const questions = useSelector((state: KanbasState) => state.questionsReducer.questions);
    const question = useSelector((state: KanbasState) => state.questionsReducer.question);

    const handleNewQuestion = async () => {
        const res = await client.createQuestion(quizId, question);
        dispatch(addQuestion(res.body))
    }

    const handleUpdateQuestion = async () => {
        const res = await client.updateQuestion(question);
        dispatch(addQuestion(res.body))
    }

    return (
        <div>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>
                        <QuestionDisplay question={question} />
                    </li>
                ))}
            </ul>
            <EditQuestion/>
            <button onClick={handleNewQuestion}>New Question</button>
            <button onClick={handleUpdateQuestion}>Update Question</button>
        </div>
    );
}
export default EditQuestions;