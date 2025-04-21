import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import { LayoutDashboard, BookOpen, Users } from "lucide-react";

const Dashboard = ({ isSidebarCollapsed, setIsSidebarCollapsed }) => {
  const cardData = [
    {
      icon: <LayoutDashboard size={32} />,
      bgColor: "bg-[#B348FF]",
      title: "Welcome",
      subtitle: "Overview of your platform",
    },
    {
      icon: <BookOpen size={32} />,
      bgColor: "bg-[#34A853]",
      title: "Courses",
      subtitle: "Manage all your courses",
    },
    {
      icon: <Users size={32} />,
      bgColor: "bg-[#4285F4]",
      title: "Users",
      subtitle: "Manage platform users",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-6 bg-gray-100 flex-1 overflow-auto">
          <div className="w-full">
            {/* Title */}
            <div className="flex items-center justify-between w-full max-w-[1067px] mx-auto mb-6 ">
              <h1 className="text-[#202224] font-bold text-[32px] font-['Nunito_Sans'] tracking-[-0.114px]">
                Dashboard
              </h1>
            </div>

            {/* Cards Row */}
            <div className="flex gap-6 justify-start overflow-x-auto mt-8 px-4">
              {cardData.map((card, index) => (
                <DashboardCard
                  key={index}
                  icon={card.icon}
                  bgColor={card.bgColor}
                  title={card.title}
                  subtitle={card.subtitle}
                />
              ))}
            </div>

            {/* Recent Activity Section */}
            <div className="mt-10">
              <h1 className="text-[#202224] font-bold text-[32px] font-['Nunito_Sans'] tracking-[-0.114px] mb-4">
                Recent Activity
              </h1>
              <div className="w-[1103px] h-[437px] bg-white rounded-xl shadow-md mx-auto mt-4 flex items-center justify-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
