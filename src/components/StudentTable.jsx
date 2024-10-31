import React, { useState } from 'react';

function StudentTable() {
  const [editRow, setEditRow] = useState(null);
  const [students, setStudents] = useState([
    { id: 'S001', name: 'Neil Sims', age: 20, email: 'neil.sims@flowbite.com', address: '123 Main St, Springfield' },
    { id: 'S002', name: 'Alex Turner', age: 22, email: 'alex.turner@example.com', address: '456 Maple Ave, Greenfield' },
    { id: 'S001', name: 'Neil Sims', age: 20, email: 'neil.sims@flowbite.com', address: '123 Main St, Springfield' },
    { id: 'S002', name: 'Alex Turner', age: 22, email: 'alex.turner@example.com', address: '456 Maple Ave, Greenfield' },
    { id: 'S001', name: 'Neil Sims', age: 20, email: 'neil.sims@flowbite.com', address: '123 Main St, Springfield' },
    { id: 'S002', name: 'Alex Turner', age: 22, email: 'alex.turner@example.com', address: '456 Maple Ave, Greenfield' },
    { id: 'S001', name: 'Neil Sims', age: 20, email: 'neil.sims@flowbite.com', address: '123 Main St, Springfield' },
    { id: 'S002', name: 'Alex Turner', age: 22, email: 'alex.turner@example.com', address: '456 Maple Ave, Greenfield' },
    { id: 'S001', name: 'Neil Sims', age: 20, email: 'neil.sims@flowbite.com', address: '123 Main St, Springfield' },
    { id: 'S002', name: 'Alex Turner', age: 22, email: 'alex.turner@example.com', address: '456 Maple Ave, Greenfield' },
    { id: 'S001', name: 'Neil Sims', age: 20, email: 'neil.sims@flowbite.com', address: '123 Main St, Springfield' },
    { id: 'S002', name: 'Alex Turner', age: 22, email: 'alex.turner@example.com', address: '456 Maple Ave, Greenfield' },
    { id: 'S001', name: 'Neil Sims', age: 20, email: 'neil.sims@flowbite.com', address: '123 Main St, Springfield' },
    { id: 'S002', name: 'Alex Turner', age: 22, email: 'alex.turner@example.com', address: '456 Maple Ave, Greenfield' },
    { id: 'S001', name: 'Neil Sims', age: 20, email: 'neil.sims@flowbite.com', address: '123 Main St, Springfield' },
    { id: 'S002', name: 'Alex Turner', age: 22, email: 'alex.turner@example.com', address: '456 Maple Ave, Greenfield' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleEditClick = (index) => {
    setEditRow(editRow === index ? null : index);
  };

  const handleInputChange = (index, field, value) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = value;
    setStudents(updatedStudents);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this student?");
    if (confirmed) {
      setStudents(students.filter(student => student.id !== id));
    }
  };

  const filteredStudents = students.filter(student =>
    Object.values(student).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="relative overflow-x-auto  sm:rounded-t-2xl border rounded-2xl">
      <div className="flex items-center justify-between flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white rounded-t-2xl">
        <div className="ml-5 text-gray-500 text-xl">Students Details</div>
        <div className="relative flex items-center ml-auto mr-5">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 pl-10 text-sm text-gray-900 border rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for students"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        <table className="w-full text-sm text-left text-gray-500 table-fixed">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 border">
            <tr>
              <th scope="col" className="px-4 py-3">Reg ID</th>
              <th scope="col" className="px-4 py-3">Name</th>
              <th scope="col" className="px-4 py-3">Age</th>
              <th scope="col" className="px-4 py-3">Email</th>
              <th scope="col" className="px-4 py-3">Address</th>
              <th scope="col" className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={student.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-4 py-2">{student.id}</td>
                <td className="px-4 py-2">
                  {editRow === index ? (
                    <input
                      type="text"
                      value={student.name}
                      onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    student.name
                  )}
                </td>
                <td className="px-4 py-2">
                  {editRow === index ? (
                    <input
                      type="number"
                      value={student.age}
                      onChange={(e) => handleInputChange(index, 'age', e.target.value)}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    student.age
                  )}
                </td>
                <td className="px-4 py-2">
                  {editRow === index ? (
                    <input
                      type="email"
                      value={student.email}
                      onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    student.email
                  )}
                </td>
                <td className="px-4 py-2">
                  {editRow === index ? (
                    <input
                      type="text"
                      value={student.address}
                      onChange={(e) => handleInputChange(index, 'address', e.target.value)}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    student.address
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
                    onClick={() => handleDelete(student.id)}
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

export default StudentTable;
