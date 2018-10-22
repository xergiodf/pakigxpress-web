import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { logoutRequest } from '../actions/session'
import logoDark from '../assets/img/logo-dark.png'
import logoLight from '../assets/img/logo-light.png'

const NavContainer = props => (
  <div className='nav-container'>
    <nav className={props.transparent ? 'absolute transparent' : ''}>
      <div className='nav-bar'>
        <div className='module left'>
          <NavLink to='/'>
            <img className='logo logo-light' alt='Foundry' src={logoLight} />
            <img className='logo logo-dark' alt='Foundry' src={logoDark} />
          </NavLink>
        </div>
        <div className='module widget-handle mobile-toggle right visible-sm visible-xs'>
          <i className='ti-menu' />
        </div>
        <div className='module-group right'>
          <div className='module left'>
            <ul className='menu'>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
            </ul>
          </div>
          <div className='module widget-handle language left'>
            <ul className='menu'>
              {props.me.data.auth &&
                <Fragment>
                  <li>
                    Welcome {props.me.data.full_name}!
                  </li>
                  <li>
                    <a
                      onClick={e => {
                        e.preventDefault()
                        return props.logoutRequest()
                      }}
                      href='/logout'
                    >
                      Log out
                    </a>
                  </li>
                </Fragment>}
              {!props.me.data.auth &&
                <li>
                  <NavLink to='/login'>My account</NavLink>
                </li>}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

const mapStateToProps = state => ({
  me: state.meReducer
})

const mapDispatchToProps = dispatch => ({
  logoutRequest: payload => dispatch(logoutRequest(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer)
