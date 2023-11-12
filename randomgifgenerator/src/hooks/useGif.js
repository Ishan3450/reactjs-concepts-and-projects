import { useState, useEffect } from "react";
import axios from "axios";

function useGif() {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const [gif, setGif] = useState();

  async function generateGIF(tag = "") {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const data = await axios.get(url);
    setGif(data.data.data.images.downsized_large.url);
  }

  useEffect(() => {
    generateGIF();
  }, []);

  return { gif, generateGIF };
}

export default useGif;
