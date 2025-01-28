import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Facebook } from "lucide-react"; // Using the Facebook logo from lucide-react

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex items-center justify-between shadow-lg fixed w-full z-10">
        <div className="flex items-center space-x-2">
          <Facebook className="w-6 h-6" />
          <span className="text-lg font-bold">Facebook Clone</span>
        </div>
        <nav className="space-x-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/groups"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "text-white"
            }
          >
            Groups
          </NavLink>
          <NavLink
            to="/video"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "text-white"
            }
          >
            Video
          </NavLink>
          <NavLink
            to="/video-games"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "text-white"
            }
          >
            Video Games
          </NavLink>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-16 p-4 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
