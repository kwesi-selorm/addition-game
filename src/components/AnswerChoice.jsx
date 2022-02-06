function AnswerChoice(props) {
  return (
    <>
      <button
        className="choice"
        type="button"
        value={props.option}
        onClick={props.function}>
        {props.option}
      </button>
    </>
  );
}

export default AnswerChoice;
