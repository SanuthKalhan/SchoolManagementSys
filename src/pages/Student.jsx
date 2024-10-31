import React from 'react';
import StudentTable from '../components/StudentTable';
import MainLayout from '../layout/MainLayout';
import StudentAddForm from '../components/StudentAddForm';

function Student() {
  return (
    <MainLayout>
      <div className="fixed bottom-0 right-0 w-40 h-40 sm:w-40 sm:h-40 bg-gradient-to-r from-green-400 to-blue-500 rounded-tl-full z-0"></div>
      <StudentAddForm />
      <StudentTable />
    </MainLayout>
  );
}

export default Student;
