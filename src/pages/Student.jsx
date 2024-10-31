import React from 'react';
import StudentTable from '../components/StudentTable';
import MainLayout from '../layout/MainLayout';
import StudentAddForm from '../components/StudentAddForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Student() {
  return (
    <MainLayout>
        <div className='text-gray-700 mb-7'>
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-700 ml-0 mr-2" />
            Student Management 
        </div>
      
      <StudentAddForm />
      <StudentTable />
    </MainLayout>
  );
}

export default Student;
