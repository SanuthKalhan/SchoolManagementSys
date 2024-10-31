import React from 'react'
import MainLayout from '../layout/MainLayout'
import CourseTable from '../components/CourseTable'
import CourseAddForm from '../components/CourseAddForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Course() {
  return (
    <MainLayout>
        <div className='text-gray-700 mb-7'>
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-700 ml-0 mr-2" />
            Course Management System
        </div>
      <div className="fixed bottom-0 right-0 w-40 h-40 sm:w-40 sm:h-40 bg-gradient-to-r from-green-400 to-blue-500 rounded-tl-full z-0"></div>
      <CourseAddForm/>
      <CourseTable/>

    </MainLayout>
  )
}

export default Course