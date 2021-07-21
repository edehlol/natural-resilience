import React from 'react';
import { Home } from './app/Home';
import { Quiz } from './features/quiz/Quiz';
import { Router } from '@reach/router';
import { Navbar } from './app/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home path="/" />
        <Quiz path="/quiz" />
      </Router>
    </div>
  );
};

export default App;
