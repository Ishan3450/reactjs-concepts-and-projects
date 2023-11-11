import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  function resetCounter() {
    setValue(0);
  }

  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="heading">Basic Counter using React</div>
        <Counter useStateInst={{ value, setValue }} />
        <button className="btn-reset" type="submit" onClick={resetCounter}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
