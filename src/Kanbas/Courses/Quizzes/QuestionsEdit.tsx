import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";

const EditQuestions = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state: KanbasState) => state.questionsReducer.questions);



    return (
        <div>
            {}
        </div>
    );
}
export default EditQuestions;