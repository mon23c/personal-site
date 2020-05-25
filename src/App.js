import React from 'react';
import TypeWriter from './util/typewriter.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TypeWriter text="Coming Soon" speed={75} delay={1250} />
      </header>
    </div>
  );
}

export default App;
