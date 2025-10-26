import { Menu } from "antd";
import { HomeOutlined, UnorderedListOutlined } from "@ant-design/icons";
import type { MenuProps } from "rc-menu";

type MenuItem = Required<MenuProps>["items"][number];

const sidebaritems: MenuItem[] = [
  { key: 1, label: "Story", itemIcon: <HomeOutlined /> },
  { key: 2, label: "Category", itemIcon: <UnorderedListOutlined /> },
];

const SidebarMenu = () => {
  return (
    <>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sidebaritems}
      />
    </>
  );
};

export default SidebarMenu;
