import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import StoryPage from "../storyPage/StoryPage";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import SidebarMenu from "../../layout/sidebarMenu/SidebarMenu";
import "./Dashboard.css";
const Dashboard = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth?.logout();
    navigate("/login");
  };

  return (
    <>
      <Layout>
        <Header className="flex justify-between items-center header">
          <h1 className="text-4xl">Logo</h1>
          <Button
            size="large"
            shape="circle"
            onClick={handleLogout}>
            <LogoutOutlined />
          </Button>
        </Header>

        <Layout>
          <Sider
            style={{
              padding: "1rem .5rem",
              color: "white",
              background: "white",
            }}>
            <SidebarMenu></SidebarMenu>
          </Sider>
          <Layout style={{ minHeight: "100vh" }}>
            <Content >
              <div  style={{ padding: 24 }}>
                <StoryPage></StoryPage>
              </div>
            </Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
