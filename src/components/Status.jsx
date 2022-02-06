import { useState } from "react";

function Status() {
  const [hearts, setHearts] = useState(["❤️", "❤️", "❤️"]);

  return (
    <div className="status-container">
      <div className="hearts">{hearts}</div>
      <h4 className="countdown-timer">60s</h4>
      <h4 className="score">100</h4>
    </div>
  );
}

export default Status;
