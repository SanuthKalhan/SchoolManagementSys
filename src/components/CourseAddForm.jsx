import React, { useState } from 'react';
import axios from 'axios';

const CourseAddForm = ({ onAddCourse }) => {
  const [newCourse, setNewCourse] = useState({
    code: '',
    title: '',
    description: '',
    difficultyLevel: '', 
    credits: '',
  });

  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newCourse.code && newCourse.title && newCourse.description && newCourse.difficultyLevel && newCourse.credits) {
      try {
        const response = await axios.post('http://localhost:5000/course', newCourse);
        console.log('Course added successfully:', response.data); 
        setNewCourse({ code: '', title: '', description: '', difficultyLevel: '', credits: '' });
        setIsSaved(true);
        setError(null);

        setTimeout(() => {
          setIsSaved(false);
        }, 2000);
        window.location.reload();
      } catch (error) {
        console.error('Error adding course:', error);
        setError('Failed to add course. Please try again.'); 
      }
    } else {
      setError('All fields are required.'); 
    }
  };

  return (
    <div className="flex-row items-center border-b bg-white mb-10 border rounded-2xl p-3"> 
      <div className="ml-2 text-gray-500 text-lg">Add New Course</div>
      <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-center mt-3 mb-0">
        <div className="flex-1 px-4 py-2">
            <input
            type="text"
            name="code"
            value={newCourse.code}
            onChange={handleChange}
            placeholder="Course Code"
            className="border rounded-lg px-2 py-1 w-full"
            required
            />
        </div>
        <div className="flex-1 px-2 py-2">
            <input
            type="text"
            name="title"
            value={newCourse.title}
            onChange={handleChange}
            placeholder="Title"
            className="border rounded-lg px-2 py-1 w-full"
            required
            />
        </div>
        <div className="flex-1 px-2 py-2">
            <input
            type="text"
            name="description"
            value={newCourse.description}
            onChange={handleChange}
            placeholder="Description"
            className="border rounded-lg px-2 py-1 w-full"
            required
            />
        </div>
        <div className="flex-1 px-2 py-2">
          <select
            name="difficultyLevel"
            value={newCourse.difficultyLevel}
            onChange={handleChange}
            className="border rounded-lg px-2 py-1 w-full"
            required
          >
            <option value="" disabled>Select Difficulty Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advance">Advance</option>
          </select>
        </div>
        <div className="flex-1 px-2 py-2">
            <input
            type="number"
            name="credits"
            value={newCourse.credits}
            onChange={handleChange}
            placeholder="No of Credits"
            className="border rounded-lg px-2 py-1 w-full"
            required
            />
        </div>
        <div className="flex-1 px-4 py-2">
            <button
            type="submit"
            className={`font-medium text-white rounded-2xl px-10 py-1 text-sm ${isSaved ? 'bg-green-500' : 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700'}`}
            >
            {isSaved ? (
                <span role="img" aria-label="Added">Addedd</span> 
            ) : (
                'Add'
            )}
            </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  );
};

export default CourseAddForm;
