import React, { Fragment } from 'react'
import NavContainer from '../NavContainer'
import FooterContainer from '../FooterContainer'
import PageTitle from '../../components/PageTitle'

const Login = () => (
  <Fragment>
    <NavContainer transparent />
    <div className="main-container">
      <PageTitle title="Login" />
      <section>
        <div className="container">
          <div className="col-md-6 col-md-push-3">
            <form className="form-email">
              <h6 className="uppercase text-center">Log In</h6>
              <input
                type="text"
                className="validate-required"
                name="name"
                placeholder="Email"
              />
              <input
                type="text"
                className="validate-required validate-email"
                name="email"
                placeholder="Password"
              />
              <a
                style={{ width: '100%' }}
                className="btn btn-lg btn-filled"
                href="dashboard.html"
              >
                {' '}
                Log In
              </a>
            </form>
            <div className="col-md-12 text-center">
              <p>
                <i>
                  Dont Have an account? <a href="sign-up.html">Sign Up</a>
                </i>
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterContainer />
    </div>
  </Fragment>
)

export default Login
