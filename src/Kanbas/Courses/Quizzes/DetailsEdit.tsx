import { useDispatch, useSelector } from "react-redux";
import { setQuiz } from "./reducer";
import { Dropdown } from "react-bootstrap";
import { KanbasState } from "../../store";

function DetailsEdit(){

    const dispatch = useDispatch();
    const quizDetails = useSelector((state: KanbasState) => state.quizzesReducer.quiz);
    const quizTypes = ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"];
  const assignmentGroups = ["Assignments", "Quizzes", "Exam", "Project"];

  const handleQuizTypeChange = (type: string) => {
    dispatch(setQuiz({ ...quizDetails, quizType: type }));
  }

  const handleAllowTimeLimit = (allow: boolean) => {
    dispatch(setQuiz({ ...quizDetails, timeLimit: allow ? 20 : -1 }));
  }

    return(
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={quizDetails.title}
            onChange={(e) =>
              dispatch(setQuiz({ ...quizDetails, title: e.target.value }))
            }
          />
          <label>Quiz instructions</label>
          <textarea
            value={quizDetails.description}
            onChange={(e) =>
              dispatch(
                setQuiz({ ...quizDetails, description: e.target.value })
              )
            } />

          <label>Quiz Type</label>
          <Dropdown className="ml-auto">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {quizDetails.quizType}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {quizTypes.map((type) => (
                <Dropdown.Item
                  key={type}
                  onClick={() => handleQuizTypeChange(type)}>
                  {type}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <label>Assignment Group</label>
          <Dropdown className="ml-auto">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {quizDetails.assignmentGroup}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {assignmentGroups.map((type) => (
                <Dropdown.Item
                  key={type}
                  onClick={() => dispatch(setQuiz({ ...quizDetails, assignmentGroup: type }))}>
                  {type}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <h3>Options</h3>
          <input type="checkbox"
            checked={quizDetails.shuffleAnswers}
            onChange={(e) =>
              dispatch(
                setQuiz({ ...quizDetails, shuffleAnswers: e.target.checked })
              )
            }
          />
          <label>Shuffle Questions</label>
          <div className="row">
            <input type="checkbox"
              checked={quizDetails.timeLimit > 0}
              onChange={(e) => handleAllowTimeLimit(e.target.checked)} />
            <label>Time Limit</label>
            <input type="number"
              value={quizDetails.timeLimit > 0 ? quizDetails.timeLimit : ''}
              disabled={quizDetails.timeLimit < 0}
              onChange={(e) =>
                dispatch(
                  setQuiz({ ...quizDetails, timeLimit: parseInt(e.target.value) })
                )
              } />
            <label>Minutes</label>
          </div>
          <input type="checkbox"
            checked={quizDetails.multipleAttempts}
            onChange={(e) =>
              dispatch(
                setQuiz({ ...quizDetails, multipleAttempts: e.target.checked })
              )
            } />
          <label>Allow Multiple Attempts</label>

          <input type="checkbox"
            checked={quizDetails.showCorrectAnswers}
            onChange={(e) =>
              dispatch(
                setQuiz({ ...quizDetails, showCorrectAnswers: e.target.checked })
              )
            } />

          <label>Show Correct Answers</label>
          
          <input type="checkbox"
            checked={quizDetails.oneQuestionAtATime}
            onChange={(e) => dispatch(setQuiz({ ...quizDetails, oneQuestionAtATime: e.target.checked }))} />
          <label>One Question at a Time</label>
          
          <input type="checkbox"
            checked={quizDetails.webcamRequired}
            onChange={(e) => dispatch(setQuiz({ ...quizDetails, webcamRequired: e.target.checked }))} />
          <label>Require Webcam</label>

          <input type="checkbox"
            checked={quizDetails.lockQuestionsAfterAnswering}
            onChange={(e) => dispatch(setQuiz({ ...quizDetails, lockQuestionsAfterAnsering: e.target.checked }))} />
          <label>Lock Questions After Ansering</label>

          <input type="text"
            value={quizDetails.accessCode}
            onChange={(e) =>
              dispatch(
                setQuiz({ ...quizDetails, accessCode: e.target.value })
              )
            } />
          <label>Access Code</label>

          <div className="card">
            <div className="card-body">
              <h5>Due</h5>
              <input type="date"
                value={quizDetails.dueDate.toString()}
                onChange={(e) =>
                  dispatch(
                    setQuiz({ ...quizDetails, dueDate: e.target.value })
                  )
                } />
                <h5>Available From</h5>
              <input type="date"
                value={quizDetails.availableDate.toString()}
                onChange={(e) =>
                  dispatch(
                    setQuiz({ ...quizDetails, availableDate: e.target.value })
                  )
                } />
                <h5>Until</h5>
              <input type="date"
                value={quizDetails.untilDate.toString()}
                onChange={(e) =>
                  dispatch(
                    setQuiz({ ...quizDetails, untilDate: e.target.value })
                  )
                } />
            </div>
            </div>
        </div>
    )
}

export default DetailsEdit;