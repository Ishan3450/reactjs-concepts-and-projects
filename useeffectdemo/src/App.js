import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [name, setName] = useState('');

  function handleChange(event) {
    console.log("CHanged...");
    setName(event.target.value);
  }

  // Variation 1 -> For every rendering
  // useEffect(
  //   () => {
  //     console.log("RENDERED")
  //   }
  // )

  // Variation 2 -> first time + For the very first time the page is completed rendering
  // useEffect(() => {
  //   console.log("RENDERED")
  // }, [])

  // Variation 3 -> first time + using dependencies
  useEffect(() => {
    console.log("Name changed");
  }, [name])

  // Variation 4 -> unmounting of event listeners and more like that
  useEffect(() => {
    console.log("Listener Added"); // Part B
    return () => {
      console.log("Listener Removed") // Part A
    }
    // Part A will run first and then after that Part B will run
  })

  return (
    <div className="App">
      <input type="text" name="" id="" value={name} onChange={handleChange}/>
    </div>
  );
}

export default App;
