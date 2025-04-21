import React from "react";
import CreateCourseForm from "../components/CreateCourseForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const CreateCourse = ({ isSidebarCollapsed, setIsSidebarCollapsed }) => {
  const handleBack = () => {
    window.history.back(); // or use navigate(-1)
  };

  const handleNext = (data) => {
    console.log("Course Data:", data);
    // Save logic or navigate to next step
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
      />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-auto bg-gray-100 p-6">
          <CreateCourseForm onBack={handleBack} onNext={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
