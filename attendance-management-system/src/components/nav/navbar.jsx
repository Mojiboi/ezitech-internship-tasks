import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center gap-4 text-[#111517]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_319">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#111517] text-lg font-bold leading-tight tracking-[-0.015em]">
              AMS
            </h2>
          </div>
        {/* Logo or Brand */}
        {/* <div className="text-xl font-bold text-blue-600">
          Attendance System
        </div> */}

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/access-attendance"
            className="text-gray-700 hover:text-blue-600"
            activeClassName="text-blue-600 font-bold"
          >
            Access Attendance
          </NavLink>
          <NavLink
            to="/view-attendance"
            className="text-gray-700 hover:text-blue-600"
            activeClassName="text-blue-600 font-bold"
          >
            View Attendance
          </NavLink>
          <NavLink
            to="/request-leave"
            className="text-gray-700 hover:text-blue-600"
            activeClassName="text-blue-600 font-bold"
          >
            Request Leave
          </NavLink>
        </div>

        {/* Buttons */}
        <div className="space-x-4">
          <NavLink
            to="/login"
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            activeClassName="bg-gray-200"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            activeClassName="bg-blue-700"
          >
            Signup
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
