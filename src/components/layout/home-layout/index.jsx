// Libs
import React from "react";
import { Outlet } from "react-router-dom";
import * as SC from "./styled";

const HomeLayout = () => {
  return (
    <div>
      <SC.Header>
        <SC.InnerHead className="container">
          <h2 className="d-flex">Welcome Guest </h2>
        </SC.InnerHead>
      </SC.Header>
      <SC.Page>
        <SC.Main>
          <div className="container">
            <Outlet />
          </div>
        </SC.Main>
      </SC.Page>
    </div>
  );
};

export default HomeLayout;
