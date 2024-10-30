import React from 'react';
import Navbar from '../components/NavBar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="p-4 mt-20">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;