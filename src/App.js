// import React from 'react';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import './App.css';
// import { HomePage } from './containers/HomePage';
// import { CustomerAccessPage } from './containers/customerAccessPage';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" exact element={<HomePage />} />
//           <Route path="/user/access/:action" exact element={<CustomerAccessPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { HomePage } from './containers/HomePage';
import { CustomerAccessPage } from './containers/customerAccessPage';
import { UploadPage } from './containers/upload';
import { AboutUs } from './containers/about';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/access/:action" element={<CustomerAccessPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
