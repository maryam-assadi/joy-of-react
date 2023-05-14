import React from "react";
//@ts-check

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import react from "react";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gusses, setGuesses] = react.useState([]);

  function handelSubmissionGuesses(guess) {
    const newGuesses = [...gusses, guess];
    setGuesses(newGuesses);
  }

  return (
    <div className="game-wrapper">
      <GuessResult gusses={gusses} answer={answer} />
      {gusses.includes(answer) ? (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      ) : gusses.length >= NUM_OF_GUESSES_ALLOWED ? (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      ) : (
        <GuessInput handelSubmissionGuesses={handelSubmissionGuesses} />
      )}
    </div>
  );
}

export default Game;
