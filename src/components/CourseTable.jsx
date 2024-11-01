import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CourseTable() {
  const [editRow, setEditRow] = useState(null);
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/course');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleEditClick = (index) => {
    if (editRow !== null) {
      handleUpdate(courses[editRow]);
    }
    setEditRow(editRow === index ? null : index);
  };

  const handleInputChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this course?");
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:5000/course/${id}`);
        setCourses(courses.filter(course => course.id !== id));
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  };

  const handleUpdate = async (courseToUpdate) => {
    try {
      const response = await axios.put(`http://localhost:5000/course/${courseToUpdate.id}`, courseToUpdate);
      const updatedCourseIndex = courses.findIndex(course => course.id === courseToUpdate.id);
      const updatedCourses = [...courses];
      updatedCourses[updatedCourseIndex] = response.data;
      setCourses(updatedCourses);
      setEditRow(null); 
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const filteredCourses = courses.filter((course) =>
    Object.values(course).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="relative overflow-x-auto sm:rounded-t-2xl border rounded-2xl">
      <div className="flex items-center justify-between flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white rounded-t-2xl">
        <div className="ml-5 text-gray-500 text-lg">Course Details</div>
        <div className="relative flex items-center ml-auto mr-5">
          <input
            type="text"
            className="block p-2 pl-10 text-sm text-gray-900 border rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for courses"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        <table className="w-full text-sm text-left text-gray-500 table-fixed">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 border">
            <tr>
              <th className="px-4 py-3 truncate">Course Code</th>
              <th className="px-4 py-3 truncate">Title</th>
              <th className="px-4 py-3 truncate">Description</th>
              <th className="px-4 py-3 truncate">Difficulty Level</th>
              <th className="px-4 py-3 truncate">Credits</th>
              <th className="px-4 py-3 truncate">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => (
              <tr key={course.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-4 py-2">{course.code}</td>
                <td className="px-4 py-2 truncate">
                  {editRow === index ? (
                    <input
                      type="text"
                      value={course.title}
                      onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    course.title
                  )}
                </td>
                <td className="px-4 py-2 truncate">
                  {editRow === index ? (
                    <input
                      type="text"
                      value={course.description}
                      onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    course.description
                  )}
                </td>
                <td className="px-4 py-2">
                  {editRow === index ? (
                    <input
                      type="text"
                      value={course.difficultyLevel}
                      onChange={(e) => handleInputChange(index, 'difficultyLevel', e.target.value)}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    course.difficultyLevel
                  )}
                </td>
                <td className="px-4 py-2">
                  {editRow === index ? (
                    <input
                      type="number"
                      value={course.credits}
                      onChange={(e) => handleInputChange(index, 'credits', e.target.value)}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    course.credits
                  )}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEditClick(index)}
                    className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:underline mr-3"
                  >
                    {editRow === index ? 'Save' : 'Edit'}
                  </button>
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="font-medium text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CourseTable;
