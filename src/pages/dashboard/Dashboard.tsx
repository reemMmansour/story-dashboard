import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "antd";
import { IoLogOutOutline } from "react-icons/io5";
import StoryPage from "../storyPage/StoryPage";

const Dashboard = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth?.logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col p-5 ">
      <p>This is the Admin Dashboard.</p>
      <Button
        size="large"
        shape="circle"
        icon={<IoLogOutOutline />}
        onClick={handleLogout}></Button>
      <StoryPage></StoryPage>
    </div>
  );
};

export default Dashboard;
