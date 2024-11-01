import React, { useState, useContext } from 'react';
import axios from 'axios'; 
import AuthLayout from '../layout/AuthLayout';
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        login();
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Invalid username or password');
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white-100 relative">
        <div className="fixed top-0 left-0 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-r from-green-400 to-blue-500 rounded-br-full"></div>
        <div className="fixed bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-r from-green-400 to-blue-500 rounded-tl-full"></div>

        <div className="mb-10 sm:mb-20 text-2xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          School Management System
        </div>

        <div className="sm:w-100 border pt-10 rounded-lg sm:pt-10">
          <div className="px-8 sm:px-10">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-1 text-center text-gray-500">Admin Login</h1>
            <form className="bg-white p-2 rounded sm:w-96 sm:p-10 justify-center">
              <div className="mb-4 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faUser} className="text-gray-500" />
                </span>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder="Username"
                  className="appearance-none border rounded-2xl sm:w-3/4 md:w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faLock} className="text-gray-500" />
                </span>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="appearance-none border rounded-2xl sm:w-3/4 md:w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-1.5 px-4 rounded-3xl focus:outline-none focus:shadow-outline text-sm pl-10 pr-10 sm:w-3/4 md:w-full mt-3"
                  onClick={handleClick}
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default LoginPage;
