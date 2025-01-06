import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              TODO APP
            </Link>
          </div>


          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
            <Link to="/login" className="hover:text-yellow-400 transition">
              Login
            </Link>
           
          </div>


          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-white hover:text-yellow-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-2 py-4">
              <Link
                to={'/'}
                className="block px-4 py-2 hover:bg-blue-500 transition"
              >
                Home
              </Link>
              <Link
                to={'/login'}
                className="block px-4 py-2 hover:bg-blue-500 transition"
              >
                Login
              </Link>
            
            
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
