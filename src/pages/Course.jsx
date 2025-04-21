import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Course = ({ isSidebarCollapsed, setIsSidebarCollapsed }) => {
  const navigate = useNavigate();

  const handleCreateNew = () => {
    navigate('/courses/create'); // 👈 this will route to the create course page
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
      />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-6 bg-gray-100 flex-1 overflow-auto flex items-center justify-center">
          <div className="w-full">
            {/* Title and Button */}
            <div className="flex items-center justify-between w-full max-w-[1067px] mx-auto mb-6 mt-[-300px]">
              <h1 className="text-[#202224] font-bold text-[32px] font-['Nunito_Sans'] tracking-[-0.114px]">
                Course Page
              </h1>
              <button
                onClick={handleCreateNew}
                className="flex w-[227px] h-12 px-5 py-3 justify-center items-center gap-2 border border-black rounded-md text-[#000] font-medium"
              >
                + Create New Section
              </button>
            </div>

            {/* Info Box */}
            <div className="w-[1067px] h-[180px] bg-white rounded-xl shadow-md mx-auto mt-8 flex items-center justify-center">
              <p className="text-[#000] font-text-[16px] font-['normal']">
                No courses Available. Please add a new course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
