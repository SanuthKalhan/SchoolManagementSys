import React, { useState } from 'react';

const StudentAddForm = ({ onAddStudent }) => {
  const [newStudent, setNewStudent] = useState({
    id: '',
    name: '',
    age: '',
    email: '',
    address: '',
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newStudent.id && newStudent.name && newStudent.age && newStudent.email && newStudent.address) {
      onAddStudent(newStudent);
      setNewStudent({ id: '', name: '', age: '', email: '', address: '' });
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    }
  };

  return (
    <div className="flex-row items-center border-b bg-white h-32 mb-10 border rounded-2xl "> 
    ` <div className="ml-5 text-gray-500 text-xl">Add New Student</div>
      <form onSubmit={handleSubmit} className="w-full flex items-center mt-3">
        <div className="flex-1 px-4 py-2">
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
        <div className="flex-1 px-4 py-2">
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
        <div className="flex-1 px-4 py-2">
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
        <div className="flex-1 px-4 py-2">
          <input
            type="email"
            name="email"
            value={newStudent.email}
            onChange={handleChange}
            placeholder="Email"
            className="border rounded-lg px-2 py-1 w-full"
            required
          />
        </div>
        <div className="flex-1 px-4 py-2">
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
        <div className="flex-initial px-4 py-2">
          <button
            type="submit"
            className={`font-medium text-white rounded-2xl px-5 py-1 text-sm ${isSaved ? 'bg-green-500' : 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700'}`}
          >
            {isSaved ? (
              <span role="img" aria-label="Saved">✅</span> 
            ) : (
              'Save'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentAddForm;
