import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentLogin from './studentLogin';  
import AdminLogin from './adminLogin';
import BusDriverLogin from './busdriverLogin'
import Dashboard from './dashboard';  
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/busdriverlogin" element={<BusDriverLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
