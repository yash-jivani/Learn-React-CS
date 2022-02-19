import logo from './logo.svg';
import './App.css';
import User from './User';   // functional component
import ClsComp from './Cls-comp';  // class component

function App() {
  return (
    <div className="App">
      <User/>
      <ClsComp />
    </div>
    
  );
}

export default App;
