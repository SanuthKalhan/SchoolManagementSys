import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import StudentEnrollment from '../components/StudentEnrollment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import LecturerEnrollment from '../components/LecturerEnrollment';
import StudentSubjectsList from '../components/StudentSubjectsList';
import SubjectStudentsList from '../components/SubjectStudentsList';
import axios from 'axios'; 

export default function Enrollment() {
  const [students, setStudents] = useState([]); 
  const [subjects, setSubjects] = useState([]);
  const [lecturers, setLecturers] = useState([]); 
  const [studentSubjects, setStudentSubjects] = useState([]); 
  const [lecturerSubjects, setLecturerSubjects] = useState([]);

  useEffect(() => {
    const fetchEnrollmentData = async () => {
      try {
        const studentsResponse = await axios.get('http://localhost:5000/student');
        setStudents(studentsResponse.data);

        const subjectsResponse = await axios.get('http://localhost:5000/course');
        setSubjects(subjectsResponse.data);

        const lecturersResponse = await axios.get('http://localhost:5000/lecturer');
        setLecturers(lecturersResponse.data);
        
        const studentSubjectsResponse = await axios.get('http://localhost:5000/stusub');
        setStudentSubjects(studentSubjectsResponse.data);
        
        const lecturerSubjectsResponse = await axios.get('http://localhost:5000/lecsub');
        setLecturerSubjects(lecturerSubjectsResponse.data);
      } catch (error) {
        console.error('Error fetching enrollment data:', error);
      }
    };

    fetchEnrollmentData();
  }, []); 

  const handleEnrollStudent = (enrollmentData) => {
    console.log('Enrolled Student:', enrollmentData);
  };

  const handleEnrollLecturer = (enrollmentData) => {
    console.log('Enrolled Lecturer:', enrollmentData);
  };

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
        enrolled = {studentSubjects}
      />
      <LecturerEnrollment
        onEnrollLecturers={handleEnrollLecturer}
        lecturers={lecturers} 
        subjects={subjects}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-between px-0 mt-10">
        <StudentSubjectsList
          students={students}
          subjects={subjects}
          studentSubjects={studentSubjects}
        />
        <SubjectStudentsList
          students={students}
          subjects={subjects}
          lecturerSubjects={lecturerSubjects}
        />
      </div>
    </MainLayout>
  );
}
