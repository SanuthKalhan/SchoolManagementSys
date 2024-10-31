import React, { useState } from 'react';

const SubjectStudentsList = ({ students, subjects }) => {
  const [selectedSubjectCode, setSelectedSubjectCode] = useState('');
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  const handleSubjectChange = (e) => {
    const subjectCode = e.target.value;
    setSelectedSubjectCode(subjectCode);

    const studentsEnrolled = students.filter(student => 
      student.enrolledSubjects && student.enrolledSubjects.includes(subjectCode)
    );
    setEnrolledStudents(studentsEnrolled);
  };

  return (
    <div className="flex-row items-center border-b bg-white mb-10 border rounded-2xl p-3">
      <div className="ml-2 text-gray-500 text-lg">View Enrolled Students</div>
      <form className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-center mt-3 mb-0">
        <div className="flex-1 px-2 py-2">
          <label htmlFor="subjectCode" className="sr-only">Select Subject</label>
          <select
            id="subjectCode"
            value={selectedSubjectCode}
            onChange={handleSubjectChange}
            className="border rounded-lg px-2 py-1 w-40"
          >
            <option value="">Select Subject</option>
            {subjects.map(subject => (
              <option key={subject.code} value={subject.code}>
                {subject.title}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div className="mt-4">
        {enrolledStudents.length > 0 ? (
          <ul className="border-t mt-2 pt-2">
            {enrolledStudents.map(student => (
              <li
                key={student.id}
                className="px-2 py-1 border-b last:border-b-0"
              >
                {student.name} (ID: {student.id})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No students enrolled</p>
        )}
      </div>
    </div>
  );
};

export default SubjectStudentsList;
