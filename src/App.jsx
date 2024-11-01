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
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route path="/student" element={<ProtectedRoute><Student/></ProtectedRoute>}/>
          <Route path="/lecturer" element={<ProtectedRoute><Lecturer/></ProtectedRoute>}/>
          <Route path="/course" element={<ProtectedRoute><Course/></ProtectedRoute>}/>
          <Route path="/enrollment" element={<ProtectedRoute><Enrollment/></ProtectedRoute>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
