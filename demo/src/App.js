import './App.css';
import TestComponent from './components/TestComponent';

function App() {
  const userId = "99";
  return (
    <div className="App">
      <div>Noice....</div>
      <TestComponent className="This is a list of classes passed to a compoonent's classname attribute" userName="Ishan" userId={userId}>
        This is passed as user data 
      </TestComponent>
    </div>
  );
}

export default App;
