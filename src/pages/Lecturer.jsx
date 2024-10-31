import React from 'react'
import MainLayout from '../layout/MainLayout'
import LecturerTable from '../components/LecturerTable'
import LecturerAddForm from '../components/LecturerAddForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


function Lecturer() {
  return (
    <MainLayout>
        <div className='text-gray-700 mb-7'>
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-700 ml-0 mr-2" />
            Lecturer Management
        </div>
        <LecturerAddForm/>
        <LecturerTable/>
    </MainLayout>
  )
}

export default Lecturer