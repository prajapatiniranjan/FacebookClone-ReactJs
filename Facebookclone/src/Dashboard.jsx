import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <button onClick={() => { logout(); navigate("/login"); }}>Logout</button>
    </div>
  );
};

export default Dashboard;
