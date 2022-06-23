import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <Button
        border="none"
        color="cyan"
        height="50px"
        radius="10%"
        width="200px"
        onClick={() => console.log('Click on button')}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
