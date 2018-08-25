import React from 'react'
import { NavLink } from 'react-router-dom'

import logoDark from '../assets/img/logo-dark.png'
import logoLight from '../assets/img/logo-light.png'

const NavContainer = props => (
  <div className="nav-container">
    <nav className={props.transparent ? 'absolute transparent' : ''}>
      <div className="nav-bar">
        <div className="module left">
          <a href="index.html">
            <img className="logo logo-light" alt="Foundry" src={logoLight} />
            <img className="logo logo-dark" alt="Foundry" src={logoDark} />
          </a>
        </div>
        <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
          <i className="ti-menu" />
        </div>
        <div className="module-group right">
          <div className="module left">
            <ul className="menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">Calculate Package</NavLink>
              </li>
              <li>
                <NavLink to="/">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="module widget-handle language left">
            <ul className="menu">
              <li>
                <a href="log-in.html">My Account</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default NavContainer
