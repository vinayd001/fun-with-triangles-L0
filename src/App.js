import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";

import IsTriangle from "./IsTriangle";
import TriangleQuiz from "./TriangleQuiz";
import CheckHypotenuse from "./CheckHypotenuse";
import Area from "./Area";

export default function App() {
  const [value, setValue] = useState(2);
  return (
    <div className="App">
      {/* <Paper square> */}
      <Router>
        <nav>
          <ul>
            <li>
              <Link className="text-link" to="/">
                Is Triangle?
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/triangle-quiz">
                Quiz
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/check-hypotenuse">
                Hypotenuse
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/area">
                Area
              </Link>
            </li>
          </ul>

          <hr />
        </nav>
        <Route exact path="/" component={IsTriangle} />
        <Route path="/triangle-quiz" component={TriangleQuiz} />
        <Route path="/check-hypotenuse" component={CheckHypotenuse} />
        <Route path="/area" component={Area} />
      </Router>

      {/* </Paper> */}
      {/* <IsTriangle /> */}

      {/* <TriangleQuiz /> */}
      {/* <CheckHypotenuse /> */}
      {/* <Area /> */}
    </div>
  );
}
