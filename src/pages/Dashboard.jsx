import React from 'react';
import MainLayout from '../layout/MainLayout';
import Card from '../components/card';

function Dashboard() {
  return (
    <MainLayout>
      <div className="fixed bottom-0 right-0 w-40 h-40 sm:w-40 sm:h-40 bg-gradient-to-r from-green-400 to-blue-500 rounded-tl-full"></div>
      <div className="text-gray-500 text-2xl text-left mb-10 ml-5 mt-0">
        Welcome to the Admin Dashboard!
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center px-20 mt-20">
        <Card img={'/student.jpg'} title={"Student Management"} nav={"/student"} />
        <Card img={'/teacher.jpg'} title={"Lecturer Management"} nav={"/lecturer"} />
        <Card img={'/course.jpg'} title={"Course Management"} nav={"/course"}/>
        <Card img={'/enroll.jpg'} title={"Enrollment Management" }  nav={"/enrollment"}/>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
