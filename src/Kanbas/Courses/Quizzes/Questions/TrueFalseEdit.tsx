import { useDispatch, useSelector } from "react-redux";
import { KanbasState, Question } from "../../../store";
import { useParams } from "react-router";
import { setQuestion } from "./reducer";
import { useEffect } from "react";

const TrueFalseEdit = ({ question }: { question: Question }) => {
    const { quizId } = useParams();
    const dispatch = useDispatch();

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
            <label>
                <input
                    type="radio"
                    value="True"
                    name="trueFalse"
                    onClick={() => handleRadioChange("True")}
                />
                True
            </label>
            <label>
                <input
                    type="radio"
                    value="False"
                    name="trueFalse"
                    onClick={() => handleRadioChange("False")}
                />
                False
            </label>
        </div>
    )
}

export default TrueFalseEdit;