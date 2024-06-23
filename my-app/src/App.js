import logo from './logo.svg';
import './App.css';
import FunctionalGreeing from './components/FunctionalGreeting';
import FunctionalGreeingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreeing />
      <FunctionalGreeingWithProps greeting ="nice to meed you!" name="eija" age="23"/>
    </div>
  );
}

export default App;
