import React from "react";

function GuessInput({ handelSubmissionGuesses }) {
  const [unsubmittedGuess, setUnsubmittedGuess] = React.useState("");

  function handelSubmit(event) {
    event.preventDefault();
    handelSubmissionGuesses(unsubmittedGuess);
    setUnsubmittedGuess("");
  }
  return (
    <form onSubmit={handelSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={unsubmittedGuess}
        onChange={(event) =>
          setUnsubmittedGuess(event.target.value.toUpperCase())
        }
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
