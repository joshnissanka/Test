import React from 'react'
import { NavLink } from "react-router-dom";
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <ul className="header-menu">
          <li className="active">
            <NavLink className="link" to="/">
              home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/users">
              users
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/products">
              products
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header