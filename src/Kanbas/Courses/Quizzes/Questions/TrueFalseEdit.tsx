import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import { useParams } from "react-router";
import { setQuestion } from "./reducer";
import { useEffect } from "react";

const TrueFalseEdit = () => {

    const question = useSelector((state: KanbasState) => state.questionsReducer.question);
    const {quizId} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setQuestion({...question, type: "True/False", answer: "", choices: ["", ""]}));
    }, [quizId])

    const handleTrue = (answer: string) => {
        dispatch(setQuestion({...question, answer: answer, choices:[answer, question.choices[1]]}));
    }
    const handleFalse = (answer: string) => {
        dispatch(setQuestion({...question, choices:[question.choices[0], answer]}));
    }
    return (
        <div>
            <input type="text"
            value={question.choices[0]}
            onChange={(e)=> handleTrue(e.target.value)}/>
            <label>True</label>
            <input type="text"
            value={question.choices[1]}
            onChange={(e)=> handleFalse(e.target.value)}/>
            <label>True</label>
        </div>
    )
}

export default TrueFalseEdit;