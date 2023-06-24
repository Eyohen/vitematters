import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Listing from "../Pages/Listing";
import Packages from "../Pages/Packages";
import Subscriptions from "../Pages/Subscriptions";
import Users from "../Pages/Users";
import Products from "../Pages/products";
import PageContent from "../Components/PageContent";
import ListRead from "../Pages/ListRead";
import Baby from "../Pages/Baby";
import ListEdit from "../Pages/ListEdit";
import ListCreate from "../Pages/ListCreate";



function MainRoutes() {
  return (
    <Routes>
      
      <Route path="*" element={<Login />} />
      <Route index exact path="/dash" element={<Dashboard />} />
      <Route path="/listing" element={<Listing />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/products" element={<Products />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/users" element={<Users />} />
        <Route path="/listread/:id" element={<ListRead />} />
        <Route path="/baby" element={<Baby />} />
        <Route path="/listedit/:id" element={<ListEdit />} />
        <Route path="/listcreate" element={<ListCreate />} />
      {/* <Route path="/" element={<PageContent/>}>
        <Route index exact element={<Dashboard />} />

      </Route> */}
    </Routes>
  );
}

export default MainRoutes;
