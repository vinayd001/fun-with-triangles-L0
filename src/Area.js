import "./styles.css";

import { useState } from "react";

export default function Area() {
  const [base, setBase] = useState(null);
  const [height, setHeight] = useState(null);
  const [area, setArea] = useState(0);
  const [error, setError] = useState(0);

  const changeBase = (e) => {
    setBase(e.target.value);
  };

  const changeHeight = (e) => {
    setHeight(e.target.value);
  };

  const showArea = () => {
    setArea(0);
    setError(0);
    if (base > 0 && height > 0) setArea(base * height * 0.5);
    else setError(1);
  };

  return (
    <div className="TriangleQuiz">
      <h1>Check Area of a Triangle</h1>
      <h2>Area of a triangle = 1/2(Base * Height)</h2>
      <div className="container">
        <p>Base(in cm)</p>
        <input onChange={changeBase} name="base" placeholder="Enter base" />
        <p>Height(in cm)</p>
        <input
          onChange={changeHeight}
          name="height"
          placeholder="Enter height"
        />
      </div>
      <br />
      <button onClick={showArea} type="submit">
        Check Hypotenuse
      </button>
      <br />
      <br />
      {area > 0 && <div>The area of the triangle is {area} cm²</div>}
      {error === 1 && <div>Please enter non zero positive value</div>}
    </div>
  );
}
