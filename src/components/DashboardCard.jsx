import React from "react";
import { ArrowUpRight } from "lucide-react";

const DashboardCard = ({ icon, bgColor, title, count, recent, isActive }) => {
  return (
    <div className={`w-[280px] h-[140px] rounded-xl p-4 shadow-md bg-white flex flex-col justify-between border-2 ${isActive ? 'border-blue-500' : 'border-transparent'}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm text-gray-500">{title}</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">{count}</p>
        </div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bgColor} text-white`}>
          {icon}
        </div>
      </div>
      <div className="flex items-center text-green-600 text-sm mt-1">
        <ArrowUpRight size={16} className="mr-1" />
        <span>{recent}</span>
      </div>
    </div>
  );
};

export default DashboardCard;
