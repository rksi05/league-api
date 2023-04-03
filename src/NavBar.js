import React from "react";
import { NavBar, Nav, NavLink, NavMenu } from "./NavbarElements";

// my nav bar, see app.js for source

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            All Champions
          </NavLink>
          <NavLink to="/Champions" activeStyle>
            Champions Data
          </NavLink>
          <NavLink to="/About" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;