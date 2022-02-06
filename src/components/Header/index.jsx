import React from 'react'
import { useHistory } from 'react-router'
import * as FaIcons from 'react-icons/fa'
import { CarFilled, PhoneFilled } from '@ant-design/icons'

import * as G from '../../assets/Styles/stylesGlobal'
import * as S from './style'
import Logo from '../../assets/Images/logo.png'

import { ROUTER } from '../../constants/router'


const Header = () => {
  const history = useHistory()
  return (
    <div className="header">
      {/* Tophead */}
      <S.TopHead>
        <G.Container>
          <S.Contenttop>
            <S.TopbarLeft>
              <S.TopbarItem
                onClick={() => history.push({
                  pathname: ROUTER.REGISTER,
                  // search: "?sort=new",
                  // hash: "#show",
                  // state: item
                })}
              >
                Đăng ký
              </S.TopbarItem>
              <S.TopbarItem onClick={() => history.push(ROUTER.LOGIN)}>
                Đăng nhập
              </S.TopbarItem>
            </S.TopbarLeft>
            <S.TopbarRight>
              <S.TopbarItem onClick={()=>history.push(ROUTER.DEFAULT.INSTRUCT)}>Hướng dẫn</S.TopbarItem>
              <S.TopbarItem onClick={()=>history.push(ROUTER.DEFAULT.ORDER)}>Đơn hàng</S.TopbarItem>
            </S.TopbarRight>
          </S.Contenttop>
        </G.Container>
      </S.TopHead>
      <S.Header>
        <G.Container>
          <S.ContentHeader>
            <S.Logo>
              <img src={Logo} alt="" />
            </S.Logo>
            <S.HeaderService>
              <S.Wrp>
                <S.FontWave>
                  <CarFilled style={{ fontSize: "2em", color: "#66a182" }} />
                </S.FontWave>
                <S.TextPolicy>
                  <p style={{ margin: 0 }}>Miễn phí vận chuyển</p>
                  <span style={{ color: "#252525" }}>Với đơn hàng trị giá trên<br />
                    <strong style={{ cursor: "pointer" }}>1.000.000</strong>
                  </span>
                </S.TextPolicy>
              </S.Wrp>
              <S.Wrp>
                <S.FontWave>
                  <PhoneFilled style={{ fontSize: "2em", color: "#66a182" }} />
                </S.FontWave>
                <S.TextPolicy>
                  <p style={{ margin: 0 }}>Đặt hàng ngay</p>
                  <span style={{ color: "#252525" }}>Gọi ngay&nbsp;
                    <strong style={{ cursor: "pointer" }} onClick={() => history.push(ROUTER.DEFAULT.TEL)}>19006750</strong>
                  </span>
                </S.TextPolicy>
              </S.Wrp>
            </S.HeaderService>
            <S.Cartgroup>
              <S.HeadingCart>
                <S.FontWave style={{ background: "#66a182", cursor: "pointer" }} onClick={() => history.push(ROUTER.DEFAULT.CART)}>
                  <FaIcons.FaCartPlus style={{ fontSize: "1.75em", color: "#fff" }} />
                </S.FontWave>
                <S.TextPolicy>
                  <p style={{ color: "#66a182", cursor: "pointer", margin: "0" }} onClick={() => history.push(ROUTER.DEFAULT.CART)}>Giỏ hàng</p>
                  <p style={{ color: "#252525", margin: "0" }}>
                    <span className="count_item" style={{ color: "red" }}>(0)&nbsp;</span>
                    Sản phẩm
                  </p>
                </S.TextPolicy>
              </S.HeadingCart>
            </S.Cartgroup>
          </S.ContentHeader>
        </G.Container>
      </S.Header>
    </div>
  )
}

export default Header
