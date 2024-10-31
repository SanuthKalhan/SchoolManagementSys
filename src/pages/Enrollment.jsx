import React from 'react'
import MainLayout from '../layout/MainLayout'
import StudentEnrollment from '../components/StudentEnrollment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import LecturerEnrollment from '../components/LecturerEnrollment';
import StudentSubjectsList from '../components/StudentSubjectsList';
import SubjectStudentsList from '../components/SubjectStudentsList';


const students = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
  ];
  
  const subjects = [
    { code: 'CS101', title: 'Introduction to Computer Science' },
    { code: 'CS102', title: 'Data Structures' },
  ];
  
  const handleEnrollStudent = (enrollmentData) => {
    console.log('Enrolled Student:', enrollmentData);
  };


export default function Enrollment() {
  return (
    <MainLayout>
        <div className='text-gray-700 mb-7'>
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-700 ml-0 mr-2" />
            Enrollment Management 
        </div>
        <StudentEnrollment
        onEnrollStudent={handleEnrollStudent}
        students={students}
        subjects={subjects}
        />
        <LecturerEnrollment
        onEnrollLecturers={handleEnrollStudent}
        lecturers={students}
        subjects={subjects}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-between px-0 mt-10">
            <StudentSubjectsList
            students = {students}
            subjects = {subjects}
            />
            <SubjectStudentsList
            students = {students}
            subjects = {subjects}
            />
        </div>
    </MainLayout>
  )
}
