import React from "react";
import { MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    label: "FLATS ON CLICK",
    key: "mail",
    icon: <MailOutlined />,
  },
];
const Navbar = () => {
  return (
    <div>
      <Menu items={items} />
    </div>
  );
};

export default Navbar;
