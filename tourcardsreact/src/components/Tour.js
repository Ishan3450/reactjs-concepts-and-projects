import { useState } from "react";
import "./Tour.css";

function Tour(props) {
  // id, name,info,image,price
  const { id, name, info, image, price } = props.plan;
  const [isReadMore, setReadMore] = useState(true);

  function tourPlaceDescriptionAlteration() {
    setReadMore(!isReadMore);
  }

  return (
    <div className="card">
      <img src={image} alt="" />

      <div className="tour-info-section">
        <div className="tour-price">₹ {price}</div>
        <div className="tour-place-name">{name}</div>
        <div
          className="tour-place-description"
          onClick={tourPlaceDescriptionAlteration}
        >
          {isReadMore ? `${info.substring(0, 150)}...` : info}
          <span className="more-or-less-content">{isReadMore ? "Read More" : " Show Less"}</span>
        </div>
      </div>

      <div className="btn-section">
        <button onClick={() => props.removeNotInterestedPlan(id)} className="btn-not-interested">
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Tour;
