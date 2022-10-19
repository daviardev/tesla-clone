import styled from "styled-components"

import { GrClose } from "react-icons/gr";
import React, { useState } from 'react'
// 1:37:03
const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false)

  return (
    <Content>
      <a>
        <img src="../../public/logo.svg" />
      </a>
      <Menu>
        <p><a href="#">Modelo S</a></p>
        <p><a href="#">Modelo 3</a></p>
        <p><a href="#">Modelo X</a></p>
        <p><a href="#">Modelo Y</a></p>
        <p><a href="#">Paneles Solares</a></p>
        <p><a href="#">Techo Solar</a></p>
      </Menu>
      <RightMenu>
        <a href="#">Tienda</a>
        <a href="#">Cuenta</a>
        <a onClick={() => setBurgerStatus(true)} href="#">Menú</a>
      </RightMenu>
      <BtnMenu show={burgerStatus}>
        <CloseWrapper>
          <CloseBtn onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>Inventario Existente</li>
        <li>Inventario Usado</li>
        <li>Intercambio</li>
        <li>Prueba De Manejo</li>
        <li>Seguros</li>
        <li>Cybertruck</li>
        <li>Roadster</li>
        <li>Semi</li>
        <li>Carga</li>
        <li>Powerwall</li>
      </BtnMenu>
    </Content>
  )
}

export default Header

const Content = styled.div `
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 20px;
    font-size: 13px;
    margin: 0 8px;
    transition: color .33s ease;
    backdrop-filter: blur(13px);

    &:hover {
      background: #fff;
      opacity: 40%;
      height: 25px;
    }
  }

  @media (max-width: 1195px) {
    display: none;
  }
`

const RightMenu = styled.div `
  display: flex;
  align-items: center;
   a {
    font-weight: 600;
    margin-right: 20px;
    font-size: 13px;
  }
`

const BtnMenu = styled.div `
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 300px;
  z-index: 1;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: all .3s ease;

  li {
    padding: 15px 0;
  }

  a {
    font-weight: 600;
  }
`

const CloseBtn = styled(GrClose) `
  cursor: pointer;
`

const CloseWrapper = styled.div `
  display: flex;
  justify-content: flex-end;
`