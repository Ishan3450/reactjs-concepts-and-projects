import React from "react";
import bgFrame from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";
import "./Template.css"


function Template(props) {
  return (
    <div className="template-container">
      <div className="form-with-info">
        <div className="heading">{props.heading}</div>
        <div className="description1">
          Build skills for today, tomorrow and beyond
        </div>
        <div className="description2">
          Education to future-proof your career
        </div>
        <div className="form">{props.children}</div>

        <div className="seperator">
          <div className="line"></div>
          <div className="text">OR</div>
          <div className="line"></div>
        </div>

        <div className="proceed-with-google">
          <FcGoogle size="1.5rem" />
          {props.formName} with Google
        </div>
      </div>

      <div className="image-part">
        <img src={props.image} className="fore-image" />
        <img src={bgFrame} className="bg-frame" />
      </div>
    </div>
  );
}

export default Template;
