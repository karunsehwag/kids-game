// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="root">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/index">Open index.html</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<h2>Welcome to the React App! Click on the link to open index.html</h2>}
          />
          <Route
            path="/index"
            element={
              <iframe
                title="Index Page"
                src="/index.html" // Accessing index.html from the public directory
                style={{ width: '100%', height: '100vh', border: 'none' }}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

