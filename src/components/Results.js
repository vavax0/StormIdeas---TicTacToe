import React from "react";
import Modal from "./Modal";

const Results = ({ results, onHideModal }) => {
  console.log(results);

  const finalResult = (results) => {
    if (results === "cross") {
      return <h2>Congratulations! Cross Wins!</h2>;
    } else if (results === "circle") {
      return <h2>Congratulations! Circle Wins!</h2>;
    } else {
      return <h2>It's a Tie!</h2>;
    }
  };

  return (
    <Modal>
      <div className="modal-box center">
        {finalResult(results)}
        <button className="start" onClick={onHideModal}>
          Start New Game
        </button>
      </div>
    </Modal>
  );
};

export default Results;
