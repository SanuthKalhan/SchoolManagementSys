import React, { useState } from 'react';

const StudentAddForm = ({ onAddStudent }) => {
  const [newStudent, setNewStudent] = useState({
    id: '',
    name: '',
    age: '',
    gender: '',
    address: '',
    birthCertificate: '',
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewStudent((prev) => ({
        ...prev,
        birthCertificate: URL.createObjectURL(file), 
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newStudent.id &&
      newStudent.name &&
      newStudent.age &&
      newStudent.gender &&
      newStudent.address &&
      newStudent.birthCertificate 
    ) {
      onAddStudent(newStudent);
      setNewStudent({ id: '', name: '', age: '', gender: '', address: '', birthCertificate: '' });
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    }
  };

  return (
    <div className="flex-row items-center border-b bg-white mb-10 border rounded-2xl p-4"> 
      <div className="ml-2 text-gray-500 text-lg">Add New Student</div>
      <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 items-center mt-3 mb-0">
        <div className="flex-1 px-2 py-2">
          <input
            type="text"
            name="id"
            value={newStudent.id}
            onChange={handleChange}
            placeholder="Reg ID"
            className="border rounded-lg px-2 py-1 w-full"
            required
          />
        </div>
        <div className="flex-1 px-2 py-2">
          <input
            type="text"
            name="name"
            value={newStudent.name}
            onChange={handleChange}
            placeholder="Name"
            className="border rounded-lg px-2 py-1 w-full"
            required
          />
        </div>
        <div className="flex-1 px-2 py-2">
          <input
            type="number"
            name="age"
            value={newStudent.age}
            onChange={handleChange}
            placeholder="Age"
            className="border rounded-lg px-2 py-1 w-full"
            required
          />
        </div>
        <div className="flex-1 px-2 py-2">
          <select
            name="gender"
            value={newStudent.gender}
            onChange={handleChange}
            className="border rounded-lg px-2 py-1 w-full"
            required
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex-1 px-2 py-2">
          <input
            type="text"
            name="address"
            value={newStudent.address}
            onChange={handleChange}
            placeholder="Address"
            className="border rounded-lg px-2 py-1 w-full"
            required
          />
        </div>
        <div className="flex-1 px-2 py-2">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="border rounded-lg px-2 py-1 w-full"
            required
          />
          {newStudent.birthCertificate && (
            <a href={newStudent.birthCertificate} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:underline">
              View Birth Certificate
            </a>
          )}
        </div>
        <div className="flex-initial px-4 py-2">
          <button
            type="submit"
            className={`font-medium text-white rounded-2xl px-10 py-1 text-sm ${isSaved ? 'bg-green-500' : 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700'}`}
          >
            {isSaved ? (
              <span role="img" aria-label="Added">✅</span> 
            ) : (
              'Add'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentAddForm;
