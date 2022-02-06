import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import {
  createArray,
  shuffleArray,
  correctAnswer,
  wrongAnswer,
} from "../functions.js";
import $ from "jquery";
import Scorecard from "./Scorecard";
import Navbar from "./Navbar";
import Main from "./Main";

function App() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [score, setScore] = useState(0);
  const [operandNumber1, setOperandNumber1] = useState(0);
  const [operandNumber2, setOperandNumber2] = useState(0);
  const [adder, setAdder] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [answerOptions, setAnswerOptions] = useState();

  const [option1, setOption1] = useState(0);
  const [option2, setOption2] = useState(0);
  const [option3, setOption3] = useState(0);

  // Loading function
  const el = document.querySelector(".loader-container");

  useEffect(() => {
    if (el) {
      el.remove(); // removing the loading element
      setLoading(false); // showing the app
    }
  }, [el]);

  // Start Game
  function handleStartAndNext() {
    setActive(true);
    $(".choice").attr("disabled", false);

    let userDifficulty = $("#difficulty").val();

    // Easy
    if (userDifficulty === "easy") {
      let easyNumber1 = Math.floor(Math.random() * 10) + 1;
      let easyNumber2 = Math.floor(Math.random() * 10) + 1;
      setOperandNumber1(easyNumber1);
      setOperandNumber2(easyNumber2);
      setAdder(10);

      const result = easyNumber1 + easyNumber2;
      setAnswer(result);

      let choices = [];
      choices.push(result);

      choices = createArray(choices, 20);

      let newChoices = shuffleArray(choices);
      setAnswerOptions(newChoices);

      setOption1(newChoices[0]);
      setOption2(newChoices[1]);
      setOption3(newChoices[2]);
    }

    // Medium
    else if (userDifficulty === "medium") {
      let mediumNumber1 = Math.floor(Math.random() * 20) + 1;
      let mediumNumber2 = Math.floor(Math.random() * 20) + 1;
      setOperandNumber1(mediumNumber1);
      setOperandNumber2(mediumNumber2);
      setAdder(20);

      const result = mediumNumber1 + mediumNumber2;
      setAnswer(result);

      let choices = [];
      choices.push(result);

      choices = createArray(choices, 40);

      let newChoices = shuffleArray(choices);
      setAnswerOptions(newChoices);

      setOption1(newChoices[0]);
      setOption2(newChoices[1]);
      setOption3(newChoices[2]);
    }

    // Hard
    else if (userDifficulty === "hard") {
      let hardNumber1 = Math.floor(Math.random() * 50) + 1;
      let hardNumber2 = Math.floor(Math.random() * 50) + 1;
      setOperandNumber1(hardNumber1);
      setOperandNumber2(hardNumber2);
      setAdder(30);
      if (operandNumber1 === operandNumber2) {
        hardNumber2 = Math.floor(Math.random() * 50) + 1;
        setOperandNumber2(hardNumber2);
      }
      const result = hardNumber1 + hardNumber2;
      setAnswer(result);

      let choices = [];
      choices.push(result);

      choices = createArray(choices, 100);

      let newChoices = shuffleArray(choices);
      setAnswerOptions(newChoices);

      setOption1(newChoices[0]);
      setOption2(newChoices[1]);
      setOption3(newChoices[2]);
    }
  }

  // Timer functions
  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      if (seconds === 0) {
        setActive(false);
      }
    }
    return () => clearInterval(interval);
  }, [active, seconds]);

  // Function for when the user selects an answer option
  function handleNextQuestion(event) {
    // Capture user answer
    const userAnswer = event.target.value;

    // Response based on user's answer
    if (userAnswer == answer) {
      correctAnswer("answer", "check-circle");
      setScore(score + adder);
    } else {
      wrongAnswer("answer", "times-circle");
    }
    setTimeout(handleStartAndNext, 1000);
  }

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                seconds={seconds}
                score={score}
                answer={answer}
                function1={handleStartAndNext}
                function2={handleNextQuestion}
                function3={useNavigate}
                operandNumber1={operandNumber1}
                operandNumber2={operandNumber2}
                option1={option1}
                option2={option2}
                option3={option3}
              />
            }
          />
          <Route
            path="/scorecard"
            element={
              <Scorecard
                id="scorecard"
                result={score}
                function1={handleStartAndNext}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
