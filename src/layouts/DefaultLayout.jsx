import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";
// import UserSidebar from "./UserSidebar";
import Footer from "../components/Footer";
import Navbarmenu from "../components/Navigation";
import * as G from '../assets/Styles/stylesGlobal'

const DefaultLayout = ({
  component: Component,
  ...props
}) => {
  const { isShowSidebar } = useSelector((state) => state.commonReducer)

  return (
    <Route
      {...props}
      render={(routeProps) => (
        <>
          <Header />
          <Navbarmenu/>
          <G.Container>
            <div >
              <Component {...routeProps} />
            </div>
          </G.Container>
          <Footer />
        </>
      )}
    />
  );
};

export default DefaultLayout;
