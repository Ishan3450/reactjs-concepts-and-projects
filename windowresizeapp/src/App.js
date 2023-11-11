import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerWidth);

  function updateDimensions() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return (() => {
      window.removeEventListener('resize', updateDimensions);
    });
  }, [width, height]);

  // window.addEventListener('resize', updateDimensions)

  return (
    <div className="App">
      <div className="height">
        <p>Height</p>
        <p id="height">{height}</p>
      </div>
      x
      <div className="width">
        <p>Width</p>
        <p id="width">{width}</p>
      </div>
    </div>
  );
}

export default App;
