import React from "react";
import { NavBar, Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Main Page
          </NavLink>
          <NavLink to="/Champions" activeStyle>
            Champions
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;