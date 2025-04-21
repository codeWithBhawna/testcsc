import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  School,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  const menuItems = [
    { label: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
    { label: "Courses", icon: <BookOpen size={20} />, path: "/courses" },
    { label: "Lessons", icon: <BookOpen size={20} />, path: "/lessons" },
    { label: "Manage Users", icon: <Users size={20} />, path: "/manage-users" },
    { label: "Manage Schools", icon: <School size={20} />, path: "/manage-schools" },
    { label: "Manage Assessment", icon: <FileText size={20} />, path: "/manage-assessment" },
    { label: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className={`h-screen bg-white border-r border-gray-200 shadow-sm transition-all duration-300 ease-in-out ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo and Toggle */}
      <div className="flex flex-col items-center justify-between p-4 space-y-4">
        <img
          src="/image 6.png"
          alt="Logo"
          className={`transition-all duration-300 ${
            collapsed ? "h-10 w-10" : "h-30 w-auto"
          }`}
        />

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-gray-100 self-end"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="mt-10 space-y-2 px-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(item.path)}
            className={`flex items-center gap-3 px-3 py-2 cursor-pointer transition rounded-md ${
              location.pathname === item.path
                ? "bg-[#B348FF] text-white"
                : "hover:bg-purple-100"
            }`}
          >
            {item.icon}
            {!collapsed && (
              <span className="text-sm font-medium text-gray-800">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
