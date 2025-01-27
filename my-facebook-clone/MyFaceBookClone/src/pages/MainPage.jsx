import React from "react";
import { Outlet, Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="main-page">
      {/* Header or Navigation */}
      <nav className="main-nav">
        <Link to="/main">Home</Link>
        <Link to="/main/video">Video</Link>
        <Link to="/main/marketplace">Marketplace</Link>
        <Link to="/main/groups">Groups</Link>
        <Link to="/main/videogames">Video Games</Link>
      </nav>

      {/* Dynamic Content */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
