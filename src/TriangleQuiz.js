import "./styles.css";

import { useState } from "react";

export default function TriangleQuiz() {
  const ans = ["90°", "right angled"];

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [score, setScore] = useState(-1);

  const questionChange1 = (e) => {
    setAnswer1(e.target.value);
  };

  const questionChange2 = (e) => {
    setAnswer2(e.target.value);
  };

  const handleButton = () => {
    var new_score = 0;
    if (answer1 === ans[0]) new_score++;
    if (answer2 === ans[1]) new_score++;
    setScore(new_score);
  };

  return (
    <div className="TriangleQuiz">
      <h1>Triangle Quiz</h1>
      <div onChange={questionChange1} className="question1">
        <p>
          What is the third angle for the triangle where angle1 = 45° and angle2
          = 45°?
        </p>
        <label>
          <input type="radio" value="45°" name="question1" />
          45°
        </label>
        <label>
          <input type="radio" value="90°" name="question1" />
          90°
        </label>
        <label>
          <input type="radio" value="60°" name="question1" />
          60°
        </label>
      </div>
      <div onChange={questionChange2} className="question2">
        <p>If a triangle has an angle of 90 degrees, what is it called?</p>
        <label>
          <input type="radio" value="obtuse" name="question2" />
          obtuse
        </label>
        <label>
          <input type="radio" value="acute" name="question2" />
          acute
        </label>
        <label>
          <input type="radio" value="right angled" name="question2" />
          right angled
        </label>
      </div>
      <br />
      <button onClick={handleButton} type="submit">
        Submit Answers
      </button>
      <br />
      <br />
      {score > -1 && <div>Your score is {score}</div>}
    </div>
  );
}
