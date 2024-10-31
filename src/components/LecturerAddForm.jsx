import React, { useState } from 'react';

const LecturerAddForm = ({ onAddLecturer }) => {
  const [newLecturer, setNewLecturer] = useState({
    id: '',
    name: '',
    age: '',
    email: '',
    address: '',
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLecturer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newLecturer.id && newLecturer.name && newLecturer.age && newLecturer.email && newLecturer.address) {
      onAddLecturer(newLecturer);
      setNewLecturer({ id: '', name: '', age: '', email: '', address: '' });
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    }
  };

  return (
    <div className="flex-row items-center border-b bg-white mb-10 border rounded-2xl p-4"> 
      <div className="text-gray-500 text-lg mb-4">Add New Lecturer</div>
      <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
        <div className="flex-1 px-4 py-2">
          <input
            type="text"
            name="id"
            value={newLecturer.id}
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
            value={newLecturer.name}
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
            value={newLecturer.age}
            onChange={handleChange}
            placeholder="Age"
            className="border rounded-lg px-2 py-1 w-full"
            required
          />
        </div>
        <div className="flex-1 px-2 py-2">
          <input
            type="email"
            name="email"
            value={newLecturer.email}
            onChange={handleChange}
            placeholder="Email"
            className="border rounded-lg px-2 py-1 w-full"
            required
          />
        </div>
        <div className="flex-1 px-2 py-2">
          <input
            type="text"
            name="address"
            value={newLecturer.address}
            onChange={handleChange}
            placeholder="Address"
            className="border rounded-lg px-2 py-1 w-full"
            required
          />
        </div>
        <div className="flex-1 px-2 py-2">
          <input
            type="text"
            name="qulifications"
            value={newLecturer.qulifications}
            onChange={handleChange}
            placeholder="Qulifications"
            className="border rounded-lg px-2 py-1 w-full"
            required
          />
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

export default LecturerAddForm;
