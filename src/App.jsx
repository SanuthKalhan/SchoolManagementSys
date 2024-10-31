import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Student from './pages/Student';
import Lecturer from './pages/Lecturer';
import Course from './pages/Course';
import Enrollment from './pages/Enrollment';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/student" element={<Student/>}/>
          <Route path="/lecturer" element={<Lecturer/>}/>
          <Route path="/course" element={<Course/>}/>
          <Route path="/enrollment" element={<Enrollment/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
