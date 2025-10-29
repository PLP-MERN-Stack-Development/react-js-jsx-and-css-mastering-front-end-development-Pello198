import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          PLP Task Manager
        </h1>
        <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">Tasks</a></li>
          <li><a href="#" className="hover:text-blue-500">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
