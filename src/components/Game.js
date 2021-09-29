import React, { Fragment, useEffect, useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";
import Results from "./Results";

const styles = {};

const Game = () => {
  const [resultsAreShown, setResultsAreShown] = useState(false);
  const [results, setResults] = useState();

  const showModalHandler = (results) => {
    setResultsAreShown(true);
    setResults(results);
  };

  const hideModalHandler = () => {
    setResultsAreShown(false);
    startAgain();
  };

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  useEffect(() => {
    if(winner || (winner === null && stepNumber > 8)) showModalHandler(winner);
  }, [winner, stepNumber])

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[timeInHistory.length - 1];
    const squares = [...current];

    if (winner) {
      return;
    } else if (squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "cross" : "circle";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const startAgain = () => {
    setStepNumber(0);
    setXisNext(true);
    setHistory([Array(9).fill(null)]);
  };

  const renderMoves = () =>
    history.slice(1).map((_step, move) => {
      const destination = `Go to move #${move + 1}`;
      return (
        <li key={move + 1}>
          <button className="step-btn" onClick={() => jumpTo(move + 1)}>
            {destination}
          </button>
        </li>
      );
    });

  return (
    <Fragment>
      {resultsAreShown && (
      <Results
        results={results}
        onHideModal={hideModalHandler}
      />
    )}
      <div className="container">
        <div className="Header">
          <h1>
            Welcome to
            <br />
            Tic Tac Toe Game!
          </h1>
        </div>
        <div className="Footer">
          <button className="start" onClick={startAgain}>
            Start Again
          </button>
        </div>
        <div className="Main">
          <Board squares={history[stepNumber]} onClick={handleClick} />
        </div>
        <div className="Info">
          <div style={styles}>
            {winner ? (
              <h2>
                Winner: <b>{winner}</b>
              </h2>
            ) : winner === null && stepNumber > 8 ? (
              <h2>
                Winner: <b>Tie</b>
              </h2>
            ) : (
              <h2>
                Next Player: <b>{xIsNext ? "X" : "O"}</b>
              </h2>
            )}
            {renderMoves()}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Game;
