import React, { useState } from 'react';

const StudentSubjectsList = ({ students, subjects }) => {
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [enrolledSubjects, setEnrolledSubjects] = useState([]);

  const handleStudentChange = (e) => {
    const studentId = e.target.value;
    setSelectedStudentId(studentId);

    const student = students.find(student => student.id === studentId);
    if (student) {
      const enrolledSubjectCodes = student.enrolledSubjects || [];
      const enrolledSubjectDetails = subjects.filter(subject => 
        enrolledSubjectCodes.includes(subject.code)
      );
      setEnrolledSubjects(enrolledSubjectDetails);
    } else {
      setEnrolledSubjects([]);
    }
  };

  return (
    <div className="flex-row items-center border-b bg-white mb-10 border rounded-2xl p-3">
      <div className="ml-2 text-gray-500 text-lg">View Enrolled Subjects</div>
      <form className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-center mt-3 mb-0">
        <div className="flex-1 px-2 py-2">
          <label htmlFor="studentId" className="sr-only">Select Student</label>
          <select
            id="studentId"
            value={selectedStudentId}
            onChange={handleStudentChange}
            className="border rounded-lg px-2 py-1 w-40"
          >
            <option value="">Select Student ID</option>
            {students.map(student => (
              <option key={student.id} value={student.id}>
                {student.id}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div className="mt-4">
        {enrolledSubjects.length > 0 ? (
          <ul className="border-t mt-2 pt-2">
            {enrolledSubjects.map(subject => (
              <li
                key={subject.code}
                className="px-2 py-1 border-b last:border-b-0"
              >
                {subject.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No subjects enrolled</p>
        )}
      </div>
    </div>
  );
};

export default StudentSubjectsList;
