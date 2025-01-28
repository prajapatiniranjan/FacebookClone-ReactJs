import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Make sure this is only wrapped once
import App from "./App"; // Main App component
import { AuthProvider } from "./AuthContext"; // Context provider for auth management

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter> {/* Make sure there is only one BrowserRouter */}
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
