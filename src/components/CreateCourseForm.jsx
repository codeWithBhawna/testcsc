import React, { useState } from "react";

const themes = [
  "bg-purple-800", "bg-purple-500", "bg-indigo-500",
  "bg-blue-400", "bg-teal-400", "bg-green-500",
  "bg-red-400", "bg-orange-400", "bg-yellow-400"
];

const CreateCourseForm = ({ onBack, onNext }) => {
  const [formData, setFormData] = useState({
    bookName: "",
    title: "",
    subheading: "",
    description: "",
    theme: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleThemeSelect = (theme) => {
    setFormData(prev => ({ ...prev, theme }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData); 
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-6 py-10 bg-[#f8faff] rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-[#202224] mb-8">Create New Course</h2>

      {/* Book Name */}
      <div className="mb-5">
        <label className="block text-gray-700 font-medium mb-2">Book Name</label>
        <input
          type="text"
          name="bookName"
          placeholder="Enter book name"
          value={formData.bookName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Title */}
      <div className="mb-5">
        <label className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Subheading */}
      <div className="mb-5">
        <label className="block text-gray-700 font-medium mb-2">Subheading</label>
        <input
          type="text"
          name="subheading"
          placeholder="Enter subheading"
          value={formData.subheading}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="block text-gray-700 font-medium mb-2">Course Description</label>
        <textarea
          name="description"
          placeholder="Enter course description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        ></textarea>
      </div>

      {/* Theme Selector */}
      <div className="mb-8">
        <label className="block text-gray-700 font-medium mb-3">Select Theme</label>
        <div className="flex gap-3">
          {themes.map((color, index) => (
            <div
              key={index}
              onClick={() => handleThemeSelect(color)}
              className={`w-6 h-6 rounded-full cursor-pointer border-2 transition duration-150 ${
                formData.theme === color ? "ring-2 ring-offset-2 ring-blue-500" : "border-gray-300"
              } ${color}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default CreateCourseForm;
