import React, { useState, useRef, useEffect } from "react";
import { Bell, MessageSquare, ChevronDown } from "lucide-react";

const Navbar = ({ sidebarWidth }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const Logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav
      className="h-[90px] px-[30px] py-[22px] flex flex-col justify-center items-start gap-[10px] flex-shrink-0 bg-white shadow-sm transition-all duration-300"
      style={{
        marginLeft: `${sidebarWidth}px`,
        width: `calc(100% - ${sidebarWidth}px)`,
      }}
    >
      <div className="w-full flex items-center justify-between">
        {/* Search bar */}
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </span>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6 ml-auto">
          <MessageSquare className="text-gray-500 hover:text-purple-500 cursor-pointer" />
          <div className="relative">
            <Bell className="text-gray-500 hover:text-purple-500 cursor-pointer" />
            <span className="absolute top-0 right-0 w-2 h-2 " />
          </div>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-full"
            >
              <img
                src="/avatar.png"
                alt="Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-left hidden sm:block">
                <div className="text-sm font-medium text-gray-800">Jone Aly</div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
              <ChevronDown
                size={18}
                className={`text-gray-500 hidden sm:block transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                </a>
                <hr className="my-1" />
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100" onClick={Logout}>
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
