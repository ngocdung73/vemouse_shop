import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import UserHeader from "../UserHeader";
import UserSidebar from "../UserSidebar";
import Footer from "../Footer";

import { ROUTER } from '../../constants/router'

const UserRoute = ({
  component: Component,
  ...props
}) => {
  const { isShowSidebar } = useSelector((state) => state.commonReducer)
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  if (!userInfo) {
    return <Redirect to={ROUTER.LOGIN} />
  } else if (userInfo.role !== 'user') {
    return <Redirect to={ROUTER.USER.HOME} />
  }
  return (
    <Route
      {...props}
      render={(routeProps) => (
        <>
          <UserHeader />
          <div className="wrapper">
            <UserSidebar />
            <div className={isShowSidebar ? "main active" : "main"}>
              <Component {...routeProps} />
            </div>
          </div>
          <Footer />
        </>
      )}
    />
  );
};

export default UserRoute;
