import React from "react";
import GuessComponent from "../GuessComponent/GuessComponent";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ gusses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <GuessComponent key={index} value={gusses[index]} answer={answer}/>
      ))}
    </div>
  );
}

export default GuessResults;
