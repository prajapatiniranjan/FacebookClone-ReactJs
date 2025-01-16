import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./LogInPage/Login";
import HeaderArea from "./HeaderArea/HeaderArea";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/HeaderArea" element={<HeaderArea />} />
      </Routes>
    </div>
  );
}

export default App;
