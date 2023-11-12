import React, { useState } from "react";
import useGif from "../hooks/useGif";

function GIFwithCategory() {
  const { gif, generateGIF } = useGif();
  const [tag, setTag] = useState("");

  return (
    <div>
      <img src={gif} alt="" />
      <input type="text" onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => generateGIF(tag)}>Generate random</button>
    </div>
  );
}

export default GIFwithCategory;
