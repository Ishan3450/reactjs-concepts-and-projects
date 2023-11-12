import React from "react";
import useGif from "../hooks/useGif";

function RandomGIF() {
  const { gif, generateGIF } = useGif();

  return (
    <div>
      <img src={gif} alt="" />
      <button onClick={generateGIF}>Generate random</button>
    </div>
  );
}

export default RandomGIF;
