import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import "./Spinner.css"

function Spinner() {
  return (
    <div className="spinner">
      <PuffLoader color="#5865f2"/>
    </div>
  );
}

export default Spinner;
