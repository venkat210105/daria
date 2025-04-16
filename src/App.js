// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseCatalog from './pages/CourseCatalog';
import HomePage from './pages/HomePage'; // Import HomePage
import './assets/styles/global.css'; // Import the global CSS

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CourseCatalog />} />
        {/* Add more routes as you add more pages */}
      </Routes>
    </Router>
  );
}

export default App;
