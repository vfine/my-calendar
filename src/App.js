import logo from './logo.svg';
import './App.css';
import Calendar from 'react-google-calendar'

function App() {
  const calendarProps = {};
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Calendar {...calendarProps} />
  </>    
  );
}

export default App;
