import React, { useState } from 'react';
import axios from 'axios';

const LecturerAddForm = () => {
  const [newLecturer, setNewLecturer] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    qualifications: '', 
  });

  const [isSaved, setIsSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLecturer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      newLecturer.name &&
      newLecturer.age &&
      newLecturer.gender &&
      newLecturer.address &&
      newLecturer.qualifications 
    ) {
      try {
        const response = await axios.post('http://localhost:5000/lecturer', newLecturer);

        if (response.status === 201) {
          console.log(response.data);
          setIsSaved(true);
          setNewLecturer({ name: '', age: '', gender: '', address: '', qualifications: '' });
          setTimeout(() => {
            setIsSaved(false);
          }, 2000);
          window.location.reload();
        }
      } catch (error) {
        setErrorMessage('Error adding lecturer. Please try again later.');
        console.error('Error:', error);
      }
    } else {
      setErrorMessage('Please fill all fields.');
    }
  };

  return (
    <div className="flex-row items-center border-b bg-white mb-10 border rounded-2xl p-4"> 
      <div className="text-gray-500 text-lg mb-4">Add New Lecturer</div>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
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
          <select
            name="gender"
            value={newLecturer.gender}
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
            name="qualifications"
            value={newLecturer.qualifications} 
            onChange={handleChange}
            placeholder="Qualifications"
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
              <span role="img" aria-label="Added">Added</span> 
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
