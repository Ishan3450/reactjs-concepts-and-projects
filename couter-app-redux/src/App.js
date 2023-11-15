import './App.css';
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./redux/slice/CounterSlice"

function App() {
  const value = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const a = {amount: 100};
  return (
    <div className="App">

          <button onClick={() => dispatch(increment(a))}>Increment</button>
          <div>{value}</div>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
