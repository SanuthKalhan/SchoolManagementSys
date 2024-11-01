import React, { useState, useEffect } from 'react';

const StudentEnrollment = ({ onEnrollStudent, students, subjects, enrolled}) => {
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [selectedStudentName, setSelectedStudentName] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const student = students.find(student => student.name === selectedStudentName);
    setSelectedStudentId(student ? student.id : '');
  }, [selectedStudentName, students]);

  const handleStudentNameChange = (e) => {
    setSelectedStudentName(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedStudentId && selectedSubject) {
      onEnrollStudent({
        studentId: selectedStudentId,
        studentName: selectedStudentName,
        subject: selectedSubject,
      });
      resetForm();
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    } else {
      alert('Please select both a student and a subject to enroll.');
    }
  };

  const resetForm = () => {
    setSelectedStudentId('');
    setSelectedStudentName('');
    setSelectedSubject('');
  };

  return (
    <div className="flex-row items-center border-b bg-white mb-10 border rounded-2xl p-3">
      <div className="ml-2 text-gray-500 text-lg">Enroll Student to a Subject</div>
      <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center mt-3 mb-0">
        <div className="flex-1 px-2 py-2">
          <label htmlFor="studentName" className="sr-only">Select Student Name</label>
          <select
            id="studentName"
            value={selectedStudentName}
            onChange={handleStudentNameChange}
            className="border rounded-lg px-2 py-1 w-full"
            required
          >
            <option value="">Select Student Name</option>
            {students.map(student => (
              <option key={student.id} value={student.name}>
                {student.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-initial px-2 py-2 text-left sm:text-right">
          <span className="text-gray-500">Enroll To:</span>
        </div>
        <div className="flex-1 px-2 py-2">
          <label htmlFor="subject" className="sr-only">Select Subject</label>
          <select
            id="subject"
            value={selectedSubject}
            onChange={handleSubjectChange}
            className="border rounded-lg px-2 py-1 w-full"
            required
          >
            <option value="">Select Subject</option>
            {subjects.map(subject => (
              <option key={subject.code} value={subject.code}>
                {subject.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-initial px-4 py-2">
          <button
            type="submit"
            className={`font-medium text-white rounded-2xl px-10 py-1 text-sm ${isSaved ? 'bg-green-500' : 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700'}`}
          >
            {isSaved ? (
              <span role="img" aria-label="Enrolled">✅</span>
            ) : (
              'Enroll'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentEnrollment;
