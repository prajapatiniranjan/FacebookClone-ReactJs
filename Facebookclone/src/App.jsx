import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import MainLayout from "./MainLayout";
// import Home from "./Home";
// import Groups from "./Groups";
// import Video from "./Video";
// import VideoGames from "./VideoGames";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="groups" element={<Groups />} />
          <Route path="video" element={<Video />} />
          <Route path="video-games" element={<VideoGames />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
