import React from 'react';

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-6 py-3  ">
        {/* Left logo */}
        <img src="/image 6.png" className="h-30 w-auto" alt="Learn Logo" />

        {/* Right logo */}
        <img src="/image 4.png" className="h-10 w-auto" alt="CSC Logo" />
      </div>
    </div>
    
  );
};

export default Navbar;
