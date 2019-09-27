import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Main } from './components/Main'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="site-header">
          <h1>
            <Link to="/">A D H A N</Link>
          </h1>
        </header>
        <Main/>
        <footer className="site-footer">
          <p>React mini-project for course IN5320.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
