// Libs
import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";

// Styles
import * as SC from "./styled";

const Layout = () => {
  const { verifyLogin, authentiCate, logoutService } = useAuth();

  useEffect(() => {
    authentiCate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    logoutService();
  };

  if (!verifyLogin()) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <SC.Header>
        <SC.InnerHead className="container">
          <h2 className="d-flex">Admin dashboard </h2>
          <a href="/" onClick={handleLogout}>
            logout
          </a>
        </SC.InnerHead>
      </SC.Header>
      <SC.Page>
        <SC.SideBar>
          <SC.Nav>
            <ul>
              <li>
                <SC.MenuLink to="/dashboard/students">Students</SC.MenuLink>
              </li>
              <li>
                <SC.MenuLink to="/dashboard/teachers">Teachers</SC.MenuLink>
              </li>
              <li>
                <SC.MenuLink to="/dashboard/users">Users</SC.MenuLink>
              </li>
            </ul>
          </SC.Nav>
        </SC.SideBar>
        <SC.Main>
          <Outlet />
        </SC.Main>
      </SC.Page>
    </>
  );
};

export default Layout;
