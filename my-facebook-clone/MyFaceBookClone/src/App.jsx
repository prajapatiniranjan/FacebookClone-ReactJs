import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

import Signup from "./pages/Signup";
// import MainPage from "./pages/MainPage";
// import HomePage from "./components/HomePage";
// import VideoSection from "./components/VideoSection";
// import Marketplace from "./components/Marketplace";
// import Groups from "./components/Groups";
// import VideoGames from "./components/VideoGames";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<MainPage />}>
          {/* Child Routes */}
          <Route index element={<HomePage />} /> {/* Default to Home */}
          <Route path="video" element={<VideoSection />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="groups" element={<Groups />} />
          <Route path="videogames" element={<VideoGames />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
