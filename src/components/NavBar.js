import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

import imgLogo from '../images/logo.png';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/ListaGrupos'>
          <img src={imgLogo} alt='logo' />
        </NavLink>
        
        <NavMenu>
          <NavLink to='/ListaGrupos' activeStyle>
            Grupos
          </NavLink>
          <NavLink to='/ListaLancamentos' activeStyle>
            Lançamentos
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Logout</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;