import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import jwtDecode from "jwt-decode";

import DefaultLayout from "./layouts/DefaultLayout"
import UserRoute from "./layouts/UserRoute";
import AdminRoute from "./layouts/AdminRoute";
import LoginRoute from "./layouts/LoginRoute";

import HomePageUser from "./pages/user/Home";
import UserProductListPage from "./pages/user/ProductList";
import UserProductDetailPage from "./pages/user/ProductDetail";
import ToDoListAntDPage from "./pages/user/ToDoListAntD";

import AdminDashboardPage from "./pages/admin/Dashboard";
import AdminProductListPage from "./pages/admin/ProductList";
import AdminModifyProductPage from "./pages/admin/ModifyProduct";

import LoginAndRegisterPage from "./pages/LoginAndRegister";
import NotFoundPage from "./pages/NotFound";

import { ROUTER } from "./constants/router";

import { darkTheme, lightTheme } from "./themes";

import { getUserInfoAction } from './redux/actions'

import LoginFormPage from "./pages/LoginAndRegister/LoginForm";
import RegisterFormPage from "./pages/LoginAndRegister/RegisterForm";
import Intruduce from "./pages/defaultPages/Intruduce";
import HomePage from "./pages/defaultPages/Home";
import ProductListPage from "./pages/defaultPages/ProducList";
import ProductDetailPage from "./pages/defaultPages/ProductDetall";
import News from "./pages/defaultPages/News";
import Contact from "./pages/defaultPages/Contact";

import "./App.css";
import "antd/dist/antd.css";


function App() {
  // const [isTop, setIsTop] = useState(true)
  const { theme } = useSelector((state) => state.commonReducer);
  const dispatch = useDispatch()

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userInfo) {
      const decodedUserData = jwtDecode(userInfo.accessToken)
      dispatch(getUserInfoAction({ id: decodedUserData.sub }))
    }
  }, [])

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     if (currentScrollY > 0 && isTop) {
  //       setIsTop(false)
  //     } else {
  //       setIsTop(true)
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Switch>
          <DefaultLayout
            exact
            path={ROUTER.REGISTER}
            component={RegisterFormPage}
          />
          <DefaultLayout
            exact
            path={ROUTER.LOGIN}
            component={LoginFormPage}
          />
          <DefaultLayout
            exact
            path={ROUTER.DEFAULT.HOME}
            component={HomePage}
          />
          <DefaultLayout
            exact
            path={ROUTER.DEFAULT.INTRUDUCE}
            component={Intruduce}
          />
          <DefaultLayout
            exact
            path={ROUTER.DEFAULT.PRODUCT_LIST}
            component={ProductListPage}
          />
          <DefaultLayout
            exact
            path={ROUTER.DEFAULT.PRODUCT_DETAIL}
            component={ProductDetailPage}
          />
          <DefaultLayout
            exact
            path={ROUTER.DEFAULT.NEWS}
            component={News}
          />
          <DefaultLayout
            exact
            path={ROUTER.DEFAULT.CONTACT}
            component={Contact}
          />
          {/*  */}
          <UserRoute
            exact
            path={ROUTER.USER.HOME}
            component={HomePageUser}
          />
          <UserRoute
            exact
            path={ROUTER.USER.PRODUCT_LIST}
            component={UserProductListPage}
          />
          <UserRoute
            exact
            path={ROUTER.USER.TO_DO_LIST_ANTD}
            component={ToDoListAntDPage}
          />
          <UserRoute
            exact
            path={ROUTER.USER.PRODUCT_DETAIL}
            component={UserProductDetailPage}
          />
          <AdminRoute exact path={ROUTER.ADMIN.DASHBOARD} component={AdminDashboardPage} />
          <AdminRoute exact path={ROUTER.ADMIN.PRODUCT_LIST} component={AdminProductListPage} />
          <AdminRoute exact path={ROUTER.ADMIN.CREATE_PRODUCT} component={AdminModifyProductPage} />
          <AdminRoute exact path={ROUTER.ADMIN.UPDATE_PRODUCT} component={AdminModifyProductPage} />
          <LoginRoute
            exact
            path={ROUTER.LOGIN}
            component={LoginAndRegisterPage}
          />
          <Route path={ROUTER.NOT_FOUND} component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;