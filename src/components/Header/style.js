import styled from "styled-components";

// Styles Tophead
export const TopHead = styled.section`
  font-size: 14px;
  height: 2.625em;
  line-height: 2.625em;
  border-bottom: 1px solid #e1e1e1;
  background: #fff;
`

export const Contenttop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px){
    justify-content: center;
  }
`

export const TopbarLeft = styled.section`
  display: flex;
  border-right: 1px #e1e1e1 solid;
`

export const TopbarRight = styled.section`
  display: flex;
  border-right: 1px #e1e1e1 solid;
  @media (max-width: 767px){
    display: none;
  }

`

export const TopbarItem = styled.article`
  color: #252525;
  padding: 0.625em 1.5625em;
  display: inline-block;
  border-left: 1px #e1e1e1 solid;
  line-height: 1.375em;
  cursor: pointer;
  &:hover{
    color: #66a182;
  }
`

// Styles Header
export const Header = styled.header`
  float: left;
  width: 100%;
  background: #fff;
`
export const ContentHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 6.875em;
`

export const Logo = styled.article`
  flex: 25%;
  width: 25%;
`

export const HeaderService = styled.article`
  display: flex;
  justify-content: space-between;
  flex: 50%;
  width: 50%;
  @media (max-width: 991px){
    display:none;
  }
`
export const Wrp = styled.div`
  display: flex;
  align-items: center;
`
export const Cartgroup = styled.article`
  flex: 25%;
  width: 25%;
`
export const HeadingCart = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`
export const FontWave = styled.div` 
  height: 3.4375em;
  width: 3.4375em;
  margin-right: 1.25em;
  text-align: center;
  border: 2px solid #66a182;
  line-height: 4em;
  border-radius: 50%;
`
export const TextPolicy = styled.div` 
  color: #66a182;
  font-weight: 400;
`