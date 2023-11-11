import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "./Buttons.css";

function Buttons(props) {
  return (
    <div className="btns">
      <div className="btns-sequences">
        <FaAngleLeft onClick={props.getPrevClient}  className="seq-btn"/>
        <FaAngleRight onClick={props.getNextClient}  className="seq-btn"/>
      </div>
      <button className="btn-surprise-me" onClick={props.surpriseIdx}>
        Surprise me
      </button>
    </div>
  );
}

export default Buttons;
