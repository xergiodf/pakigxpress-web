import React, { Fragment } from 'react'
import NavContainer from '../NavContainer'
import FooterContainer from '../FooterContainer'
import PageTitle from '../../components/PageTitle'

const Signup = () => (
  <Fragment>
    <NavContainer transparent />
    <div className="main-container">
      <PageTitle title="Sign Up" />
      <section>
        <div className="container">
          <div className="col-md-6 col-md-push-3">
            <form className="form-email">
              <h6 className="uppercase text-center">Sign Up</h6>
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
              <input
                type="text"
                className="validate-required validate-email"
                name="email"
                placeholder="Confirm Password"
              />
              <a
                style={{ width: '100%' }}
                className="btn btn-lg btn-filled"
                href="sign-up2.html"
              >
                {' '}
                Sign Up
              </a>
            </form>
            <div className="col-md-12 text-center">
              <p>
                <i>
                  Already have an account? <a href="log-in.html">Log in</a>
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

export default Signup
