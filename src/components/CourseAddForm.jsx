import React, { useState } from 'react';

const CourseAddForm = ({ onAddCourse }) => {
  const [newCourse, setNewCourse] = useState({
    code: '',
    title: '',
    description: '',
    difficulty: '',
    credits: '',
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCourse.code && newCourse.title && newCourse.description && newCourse.difficulty && newCourse.credits) {
      onAddCourse(newCourse);
      setNewCourse({ code: '', title: '', description: '', difficulty: '', credits: '' });
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
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
            <input
            type="text"
            name="difficulty"
            value={newCourse.difficulty}
            onChange={handleChange}
            placeholder="Difficulty Level"
            className="border rounded-lg px-2 py-1 w-full"
            required
            />
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

export default CourseAddForm;
