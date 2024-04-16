import { FaArrowDown, FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import QuizList from "./List";
import "./index.css";     
import "../../styles.css";                    

export const QuizzesHeaderButtons = () => {
  // Add search field
  return (
    <div className="wd-modules-header-buttons-container">
    <button
      style={{ backgroundColor: "red", color: "white" }}
      className="wd-modules-header-button ml-auto"
    >
      <FaPlus/> Quiz
    </button>
    <button className="wd-modules-header-button ml-auto">
      <FaEllipsisV />
    </button>
  </div>
  );
}

function Quizzes() {
  return (
    <div>
          <QuizzesHeaderButtons />
      <h2>Quizzes</h2>
      <QuizList />
    </div>
  );
}
export default Quizzes;

