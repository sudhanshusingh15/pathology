// import logo from './logo.svg';
// import './App.css';
// import { HomePage } from './containers/HomePage';

// function App() {
//   return <div className="App">
//     <HomePage />
//   </div>;
    
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { HomePage } from './containers/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
