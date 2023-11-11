import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./Card.css"

function Card(props) {
  return (
    <div className="card">
      <img
        src={props.clientInfo.image}
        alt=""
        className="person-image"
      />

      <p className="person-name">{props.clientInfo.name}</p>
      <p className="person-role">{props.clientInfo.job}</p>

      <FaQuoteLeft className="icon-quote" />
      <p className="person-feedback">{props.clientInfo.text}</p>
      <FaQuoteRight className="icon-quote" />

    </div>
  );
}

export default Card;
