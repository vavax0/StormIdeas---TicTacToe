import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button className='square' onClick={onClick}>
      <div className={value} />
    </button>
  );
};

export default Square;
