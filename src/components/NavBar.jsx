import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white border rounded-5xl z-10">
      <div className='flex flex-row items-center'>
        <div className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            School Management System
        </div>
        <div className="text-xs font-semibold bg-gray-800 ml-5 text-white px-3 justify-center items-center rounded-3xl py-1 hidden sm:flex">
          ADMIN
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center text-gray-600 hover:text-red-500">
          <FontAwesomeIcon icon={faSignOutAlt} className="text-xl sm:hidden" />
          <span className="ml-2 hidden sm:flex border px-3 py-1 rounded-3xl text-xs border-red-500 text-red-500">Log Out</span>
        </button>
        <div className="w-8 h-8 border rounded-full flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
            <FontAwesomeIcon icon={faUserCircle} className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
