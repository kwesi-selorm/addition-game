import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Scorecard(props) {
  const navigate = useNavigate();

  return (
    <div className="scorecard">
      <h1 className="scorecard-h1" result={props.result}>
        {props.result > 500 ? "Fantastic Job!" : "Good Job!"}
      </h1>

      <lord-icon
        src="https://cdn.lordicon.com/lupuorrc.json"
        trigger="loop"
        colors="primary:#342EAD,secondary:#EA6227"
        stroke="100"
        style={{ width: "20%", height: "20%" }}
      ></lord-icon>
      <h2 className="scorecard-h2" result={props.result}>
        You scored {props.result} points!
      </h2>

      <Button
        className="restart-button"
        color="success"
        variant="contained"
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
        style={{ fontFamily: "Luckiest Guy" }}
      >
        play again!
      </Button>
    </div>
  );
}
