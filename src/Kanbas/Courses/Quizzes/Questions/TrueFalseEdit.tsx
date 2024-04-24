import { useDispatch, useSelector } from "react-redux";
import { KanbasState, Question } from "../../../store";
import { useParams } from "react-router";
import { setQuestion } from "./reducer";
import { useEffect } from "react";

const TrueFalseEdit = () => {
    const { quizId } = useParams();
    const dispatch = useDispatch();

    const question = useSelector((state: KanbasState) => state.questionsReducer.question);
    useEffect(() => {
        dispatch(setQuestion({ ...question, type: "trueFalse", correctAnswers: [""], choices: ["True", "False"] }));
    }, [quizId])

    const handleRadioChange = (answer: string) => {
        dispatch(
          setQuestion({
            ...question,
            correctAnswers: [answer],
          })
        );
      };
      
    return (
        <div>
          <h4>The correct answer to this question is:</h4>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="trueOption"
          value="True"
          name="trueFalse"
          onClick={() => handleRadioChange("True")}
        />
        <label className="form-check-label" htmlFor="trueOption">
          True
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="falseOption"
          value="False"
          name="trueFalse"
          onClick={() => handleRadioChange("False")}
        />
        <label className="form-check-label" htmlFor="falseOption">
          False
        </label>
      </div>
    </div>
    )
}

export default TrueFalseEdit;