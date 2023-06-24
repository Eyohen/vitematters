import React, { useState } from "react";
// import { Menu, Space } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  NotificationOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  MenuOutlined,
  FireOutlined,
  SoundOutlined,
  FileTextOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Menu({ text, icon, route }) {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(false);

  return (
    <NavLink
      className={({ isActive }) => (isActive ? "menu side_menu_bg" : "menu")}
      to={route}
    >
      <div className="menuicon">{icon}</div>

      <h6 className="menutext">{text}</h6>
    </NavLink>
  );
}

function SideMenu() {
  const navigate = useNavigate();
  const [isActive, setisActive] = useState(false);
  return (
    <div className="SideMenu">
      <div
        style={{
          color: "#888888",
          fontSize: 11,
          marginTop: 20,
          marginLeft: 20,
        }}
      ></div>
      <Menu text="Dashboard" icon={<AppstoreOutlined />} route={"/dash"} />
      <Menu text="All Users" icon={<UserOutlined />} route={"/users"} />
      <Menu
        text="Listing"
        icon={<NotificationOutlined />}
        route={"/listing"}
      />
      <Menu
        text="Subscriptions"
        icon={<MenuOutlined />}
        route={"/subscriptions"}
      />
      <Menu text="Products" icon={<SettingOutlined />} route={"/products"} />
      <Menu
        text="Packages"
        icon={<MenuOutlined />}
        route={"/packages"}
      />
     
    </div>
  );
}

export default SideMenu;
