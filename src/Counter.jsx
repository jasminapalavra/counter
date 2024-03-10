import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increasement = () => {
    setCount(count + 1);
  };

  const decreasement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h2>Jasmina's Counter App</h2>
      <br />
      <div className="counter">
        <div
          style={{ textAlign: "center", marginTop: "40px", fontSize: "1.5em" }}
        >
          {count}
        </div>
        <div className="container">
          <button onClick={decreasement} className="minus-btn raise">
            -
          </button>
          <button onClick={increasement} className="plus-btn raise">
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
