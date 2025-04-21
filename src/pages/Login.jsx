import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [cscId, setCscId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
    if (cscId && password) {
      // Add your authentication logic here

      // Redirect to the dashboard after successful login
      navigate('/dashboard');
    } else {
      alert('Please enter both CSC ID and password.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f6fc]">
      <Header />
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6">
        
        {/* Left Side - Image */}
        <div className="hidden lg:flex items-end h-full mb-[-95px] ml-[-21px]">
          <img
            src="/main.png"
            alt="Girl writing"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-sm border border-blue-300 mr-40">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign in</h2>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Enter your CSC ID</label>
            <input
              type="text"
              value={cscId}
              onChange={(e) => setCscId(e.target.value)}
              placeholder="Enter your CSC ID"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm text-gray-600 mb-1">Your password</label>
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
            />
          </div>

          <div className="flex justify-between text-sm text-black-300 font-medium mb-6 underline">
            <a href="#" className="hover:underline">Other issue with sign in</a>
            <a href="#" className="hover:underline">Forget your password</a>
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition"
          >
            Log in
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            By continuing, you agree to the <a href="#" className="underline">Terms of use</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
