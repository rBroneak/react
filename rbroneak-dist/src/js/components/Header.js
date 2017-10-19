import React from "react";
import { NavLink  } from "react-router-dom";

const Header = () => (
    <div className="container">
        <header className="global-header">
          <NavLink exact={true} activeClassName={'active'}  to="/" >Bio</NavLink>
          <NavLink activeClassName={'active'} to="/expertise">Expertise</NavLink>
          <NavLink activeClassName={'active'} to="/clients">Clients</NavLink>
          <NavLink activeClassName={'active'} to="/contact">Contact</NavLink>
        </header>
    </div>
)

export default Header
