import { useState } from "react";

export default function IsTriangle() {
  const [angle1, setAngle1] = useState();
  const [angle2, setAngle2] = useState();
  const [angle3, setAngle3] = useState();
  const [isTriangle, setIsTriangle] = useState("");

  const check = () => {
    const anglesSum = Number(angle1) + Number(angle2) + Number(angle3);
    if (anglesSum === 180) setIsTriangle("Yayy, the angles form a triangle");
    else setIsTriangle("Oh Oh!, the angles do not form a triangle");
  };

  return (
    <div>
      <h1>Is Triangle?</h1>
      <label htmlFor="angle1">Angle 1</label>
      <br />
      <input
        onChange={(e) => setAngle1(e.target.value)}
        type="number"
        id="angle1"
        placeholder="In Degrees"
      />
      <br />
      <label htmlFor="angle2">Angle 2</label>
      <br />
      <input
        onChange={(e) => setAngle2(e.target.value)}
        type="number"
        id="angle2"
        placeholder="In Degrees"
      />
      <br />
      <label htmlFor="angle3">Angle 3</label>
      <br />
      <input
        onChange={(e) => setAngle3(e.target.value)}
        type="number"
        id="angle3"
        placeholder="In Degrees"
      />
      <br />
      <button onClick={check} type="submit">
        Check
      </button>
      <br />
      {isTriangle}{" "}
    </div>
  );
}
