import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
// import { useDispatch, useSelector } from "react-redux";
import { Input } from 'antd'
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import './nav.scss';
import { ROUTER } from '../../constants/router'
import * as G from '../../assets/Styles/stylesGlobal'

const { Search } = Input;

const NAVIGATION_ITEMS = [
  {
    title: "TRANG CHỦ",
    path: ROUTER.DEFAULT.HOME,
  },
  {
    title: "GIỚI THIỆU",
    path: ROUTER.DEFAULT.INTRUDUCE,
  },
  {
    title: "SẢN PHẨM",
    path: ROUTER.DEFAULT.PRODUCT_LIST,
    subNav: [
      {
        title: "Áo thun",
        path: ROUTER.DEFAULT.PRODUCT_LIST,
      },
      {
        title: "Áo phông",
        path: ROUTER.DEFAULT.PRODUCT_LIST,
      },
      {
        title: "Áo sơ mi",
        path: ROUTER.DEFAULT.PRODUCT_LIST,
      },
      {
        title: "Sản phẩm nỗi bật",
        path: ROUTER.DEFAULT.PRODUCT_LIST,
      },
      {
        title: "Sản phẩm bán chạy",
        path: ROUTER.DEFAULT.PRODUCT_LIST,
      },
    ]
  },
  {
    title: "TIN TỨC",
    path: ROUTER.DEFAULT.NEWS,
  },
  {
    title: "LIÊN HỆ",
    path: ROUTER.DEFAULT.CONTACT,
  },
];

const Navigation = () => {
  const history = useHistory()
  let location = useLocation()

  const renderNavbarItems = () => {
    return NAVIGATION_ITEMS.map((item, index) => {
      return (
        <li
          key={index}
          className={
            item.path === location.pathname
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => history.push(item.path)}
        >
          {item.title}
          {item.icons}
        </li>
      )
    })
  }

  const [isMobile, setIsMobile] = useState(false)

  console.log("isMobile", isMobile)
  return (
    <section className="navigation">
      <G.Container>
        <nav className="navbar">
          <div className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <AiOutlineClose style={{ fontSize: 28, color: "#fff" }} /> : <BiMenu style={{ fontSize: 32, color: "#fff" }} />}
          </div>
          <ul
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}
          >
            {renderNavbarItems()}
          </ul>
          <div className="search">
            <Search placeholder="Tìm kiếm.." onSearch={""} enterButton />
          </div>
        </nav>
      </G.Container>
    </section>
  )
}

export default Navigation