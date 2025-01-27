import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaHome, FaVideo, FaShoppingCart, FaUsers, FaGamepad } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white shadow-md">
      {/* Left: Facebook Logo */}
      <div className="flex items-center">
        <FaFacebook size={30} className="mr-2" />
        <h1 className="text-xl font-bold">Facebook</h1>
      </div>

      {/* Center: Navigation Links */}
      <div className="flex space-x-6">
        <Link to="/main" className="flex items-center hover:text-gray-300">
          <FaHome className="mr-1" /> Home
        </Link>
        <Link to="/main/video" className="flex items-center hover:text-gray-300">
          <FaVideo className="mr-1" /> Video
        </Link>
        <Link to="/main/marketplace" className="flex items-center hover:text-gray-300">
          <FaShoppingCart className="mr-1" /> Marketplace
        </Link>
        <Link to="/main/groups" className="flex items-center hover:text-gray-300">
          <FaUsers className="mr-1" /> Groups
        </Link>
        <Link to="/main/videogames" className="flex items-center hover:text-gray-300">
          <FaGamepad className="mr-1" /> Video Games
        </Link>
      </div>

      {/* Right: Profile */}
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/30"
          alt="User Profile"
          className="rounded-full w-8 h-8"
        />
        <span>Username</span>
      </div>
    </div>
  );
};

export default Header;
