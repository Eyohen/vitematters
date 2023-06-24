
// import AppRoutes from "./AppRoutes";
import React from 'react'
import AppHeader from './AppHeader';
import SideMenu from './SideMenu';
import { Space } from "antd";
import { Outlet } from 'react-router-dom';
function PageContent() {
  return (
    <>
      <AppHeader />
      <Space className="sideandmenu">
        <SideMenu></SideMenu>
        <div className="PageContent">
          {/* <AppRoutes /> */}
          <Outlet/>
        </div>
      </Space>
    </>


  );
}

export default PageContent;
