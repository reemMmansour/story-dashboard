
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Dashboard = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth?.logout();
    navigate("/login");
  };

  return (
    <div>
      <p>This is the Admin Dashboard.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
