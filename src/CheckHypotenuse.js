import "./styles.css";

import { useState } from "react";

export default function CheckHypotenuse() {
  const [sideA, setSideA] = useState(null);
  const [sideB, setSideB] = useState(null);
  const [sideC, setSideC] = useState(0);
  const [error, setError] = useState(0);

  const changeSideA = (e) => {
    setSideA(e.target.value);
  };

  const changeSideB = (e) => {
    setSideB(e.target.value);
  };

  const handleCheck = () => {
    setSideC(0);
    setError(0);
    if (sideA > 0 && sideB > 0)
      setSideC(Math.sqrt(Math.pow(sideA, 2), Math.pow(sideB, 2)));
    else setError(1);
  };

  return (
    <div className="TriangleQuiz">
      <h1>Check Hypotenuse</h1>
      <h2>Length of Hypotenuse = sqrt(a² + b²)</h2>
      <div className="container">
        <p>a = </p>
        <input
          onChange={changeSideA}
          name="sidea"
          placeholder="Enter length of a in cm"
        />
        <p>b = </p>
        <input
          onChange={changeSideB}
          name="sideb"
          placeholder="Enter length of b in cm"
        />
      </div>
      <br />
      <button onClick={handleCheck} type="submit">
        Check Hypotenuse
      </button>
      <br />
      <br />
      {sideC > 0 && <div>The length of the hypotenuse is {sideC} cm</div>}
      {error === 1 && <div>Please enter non zero positive value</div>}
    </div>
  );
}
