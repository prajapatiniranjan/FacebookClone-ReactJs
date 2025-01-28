import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-layout">
      {/* Header */}
      <header className="header">
        <div className="header-logo">
          <Facebook className="logo" />
          <span className="header-title">Facebook Clone</span>
        </div>
        <nav className="nav">
          <NavLink
            to="/main/home"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Home
          </NavLink>
          <NavLink
            to="/main/groups"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Groups
          </NavLink>
          <NavLink
            to="/main/video"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Video
          </NavLink>
          <NavLink
            to="/main/video-games"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Video Games
          </NavLink>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
