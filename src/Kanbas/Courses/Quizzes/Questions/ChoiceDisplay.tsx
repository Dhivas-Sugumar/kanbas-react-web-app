import { Form } from "react-bootstrap";
import { Question } from "../../../store";

const ChoiceDisplay = ({question}: {question: Question}) => {
  return (
    <div>
      <Form>
        {question.choices.map((choice) => (
          <div key={choice} className="mb-3">
            <Form.Check
              type="radio"
              id={`${question.createdAt}-${choice}`}
              name={question.title}
              value={choice}
              label={choice}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};

export default ChoiceDisplay;