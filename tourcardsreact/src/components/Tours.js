import data from "../data";
import Tour from "./Tour";
import "./Tours.css";
import { useState } from "react";

function Tours() {
  const [tourPlansData, setNewTourPlanData] = useState(data);

  function removeNotInterestedPlan(id) {
    const newTourPlansData = tourPlansData.filter((tourPlan) => {
      return id !== tourPlan.id;
    });
    setNewTourPlanData(newTourPlansData);
  }

  function refreshTours() {
    setNewTourPlanData(data);
  }

  if (tourPlansData.length === 0) {
    return (
      <div className="no-more-plans">
        <h1 className="heading">You've got it all</h1>
        <button onClick={refreshTours}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="heading">Plan with Ishan</h1>
      <div className="tour-plans">
        {tourPlansData.map((tourPlan) => {
          return (
            <Tour
              key={tourPlan.id}
              plan={tourPlan}
              removeNotInterestedPlan={removeNotInterestedPlan}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tours;
