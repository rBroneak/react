import React from "react";
import { NavLink  } from "react-router-dom";

const headerStyle = {
   paddingTop: '20px',
   paddingBottom: '20px'
};
const linkSyle = {
    marginRight: '20px',
}

const Header = () => (
    <div class="container">
        <header style={headerStyle}>
          <NavLink exact={true} activeClassName={'active'} style={linkSyle} to="/" >Bio</NavLink>
          <NavLink activeClassName={'active'} style={linkSyle} to="/expertise">Expertise</NavLink>
          <NavLink activeClassName={'active'} style={linkSyle} to="/clients">Clients</NavLink>
          <NavLink activeClassName={'active'} style={linkSyle} to="/contact">Contact</NavLink>
        </header>
    </div>
)

export default Header
