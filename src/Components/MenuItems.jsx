import React from "react";
import {
  BellOutlined,
  WalletOutlined,
  BookOutlined,
  SettingOutlined,
  LockOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export const menuItems = [
  {
    title: "Account",
    icon: <WalletOutlined />,
    url: "/",
  },
  {
    title: "History",
    icon: <BookOutlined />,
    url: "/history",
  },
  {
    title: "Setting",
    icon: <SettingOutlined />,
    url: "/setting",
  },
  {
    title: "Locked",
    icon: <LockOutlined />,
    url: "/lock",
  },
  {
    title: "LogOut",
    icon: <LogoutOutlined />,
    url: "/logout",
  },
];
