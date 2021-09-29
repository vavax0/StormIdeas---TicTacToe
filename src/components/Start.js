import React, { Fragment, useState } from "react";
import Game from "./Game";

const Start = ({ onHideModal, onShowModal }) => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGameHandler = () => setGameStarted(true);

  return (
    <Fragment>
      {gameStarted ? (
        <Game onHideModal={onHideModal} onShowModal={onShowModal} />
      ) : (
        <div className="center">
          <div className="Header">
            <h1>
              Welcome to
              <br />
              Tic Tac Toe Game!
            </h1>
            <h2>Press the button to start!</h2>
          </div>
          <button className="start" onClick={startGameHandler}>
            Start Now
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default Start;
