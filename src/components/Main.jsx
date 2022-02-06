import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import {
  faCheckCircle,
  faPlus,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Main(props) {
  const navigate = useNavigate();
  if (props.seconds === 0) {
    navigate("./scorecard");
  }

  return (
    <>
      {/* Status bar */}
      <div className="status-container">
        <h4 className="countdown-timer">timer: {props.seconds}s</h4>
        <h4 className="score">score: {props.score}</h4>
      </div>

      <div className="start-div">
        <select id="difficulty" defaultValue="">
          <option className="difficulty-option" value="">
            Level
          </option>
          <option className="difficulty-option" value="easy">
            Easy
          </option>
          <option className="difficulty-option" value="medium">
            Medium
          </option>
          <option className="difficulty-option" value="hard">
            Hard
          </option>
        </select>

        {/* Start and Pause buttons */}
        <div className="start-pause-div">
          <Button
            id="start-button"
            className="start-button"
            variant="contained"
            color="success"
            style={{ marginTop: "5px", fontFamily: "Luckiest Guy" }}
            onClick={props.function1}
            onKeyDown={props.function1}
          >
            START!
          </Button>
        </div>
      </div>

      <div className="operations">
        <h4 id="operand1" className="operand">
          {props.operandNumber1}
        </h4>
        <FontAwesomeIcon className="operator" icon={faPlus} />
        <h4 id="operand2" className="operand">
          {props.operandNumber2}
        </h4>
      </div>

      {/* Answer */}
      <div className="response-box">
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: "#4AA96C", width: "30px" }}
          id="check-circle"
        />
        <div id="answer-box" className="answer-box">
          <h3 id="answer" className="answer" hidden={true}>
            {props.answer}
          </h3>
        </div>
        <FontAwesomeIcon
          icon={faTimesCircle}
          style={{ color: "#F55C47", width: "30px" }}
          id="times-circle"
        />
      </div>

      <div className="answer-choices">
        <button
          className="choice"
          type="button"
          value={props.option1}
          onClick={props.function2}
        >
          {props.option1}
        </button>

        <button
          className="choice"
          type="button"
          value={props.option2}
          onClick={props.function2}
        >
          {props.option2}
        </button>

        <button
          className="choice"
          type="button"
          value={props.option3}
          onClick={props.function2}
        >
          {props.option3}
        </button>
      </div>
    </>
  );
}

export default Main;
