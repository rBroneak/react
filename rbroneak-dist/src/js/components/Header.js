import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (

    <header className="global-header">
        <div className="container">
            <NavLink exact={true} activeClassName={'active'} to="/react/">Bio</NavLink>
            <NavLink activeClassName={'active'} to="/expertise">Expertise</NavLink>
            <NavLink activeClassName={'active'} to="/clients">Clients</NavLink>
            <NavLink activeClassName={'active'} to="/contact">Contact</NavLink>
        </div>
    </header>

)

export default Header
