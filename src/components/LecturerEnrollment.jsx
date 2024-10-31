import React, { useState } from 'react';

const LecturerEnrollment = ({ onEnrollLecturers, lecturers, subjects }) => {
  const [selectedLecId, setSelectedLecId] = useState('');
  const [selectedLecName, setSelectedLecName] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handlelecIdChange = (e) => {
    const lecId = e.target.value;
    setSelectedLecId(lecId);
    const lecturer = lecturers.find(lecturer => lecturer.id === lecId);
    setSelectedLecName(lecturer ? lecturer.name : '');
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedLecId && selectedSubject) {
      onEnrollLecturers({
        lecId: selectedLecId,
        lecName: selectedLecName,
        subject: selectedSubject,
      });
      setSelectedLecId('');
      setSelectedLecName('');
      setSelectedSubject('');
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    }
  };

  return (
    <div className="flex-row items-center border-b bg-white mb-10 border rounded-2xl p-3">
      <div className="ml-2 text-gray-500 text-lg">Assign lecturer to a Subject</div>
      <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center mt-3 mb-0">
        <div className="flex-1 px-2 py-2">
          <label htmlFor="lecId" className="sr-only">Select lecturer ID</label>
          <select
            id="lecId"
            value={selectedLecId}
            onChange={handlelecIdChange}
            className="border rounded-lg px-2 py-1 w-full"
            required
          >
            <option value="">Select lecturer ID</option>
            {lecturers.map(lecturer => (
              <option key={lecturer.id} value={lecturer.id}>
                {lecturer.id}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 px-2 py-2">
          <label htmlFor="lecName" className="sr-only">Lecturer Name</label>
          <input
            id="lecName"
            type="text"
            value={selectedLecName}
            readOnly
            placeholder="lecturer Name"
            className="border rounded-lg px-2 py-1 w-full"
          />
        </div>
        <div className="flex-initial px-2 py-2 text-left sm:text-right">
          <span className="text-gray-500 ">Assign To:</span>
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
              <span role="img" aria-label="Assigned">✅</span>
            ) : (
              'Assign'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LecturerEnrollment;