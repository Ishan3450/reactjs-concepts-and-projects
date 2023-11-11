import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import reviews from "./data";
import Buttons from "./components/Buttons";

function App() {
  const [testimonialIdx, setIdx] = useState(0);

  function surpriseIdx() {
    setIdx(Math.floor(Math.random() * (reviews.length - 0) + 0));
  }

  function getPrevClient() {
    setIdx((prevState) => {
      if (prevState - 1 < 0) {
        return reviews.length - 1;
      }
      return prevState - 1;
    });
  }

  function getNextClient() {
    setIdx((prevState) => {
      if (prevState + 1 >= reviews.length) {
        return 0;
      }
      return prevState + 1;
    });
  }

  return (
    <div className="App">
      <div className="container">
        <p className="heading">Our Testimonials</p>
        <div className="seperator"></div>
        <div className="testimonial-card">
          <Card
            clientInfo={reviews[testimonialIdx]}
            updateClient={setIdx}
            surpriseIdx={surpriseIdx}
            getPrevClient={getPrevClient}
            getNextClient={getNextClient}
          />
          <Buttons
            updateClient={setIdx}
            surpriseIdx={surpriseIdx}
            getPrevClient={getPrevClient}
            getNextClient={getNextClient}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
