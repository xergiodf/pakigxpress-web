import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'

import { resetPassword } from '../../actions/user'

import NavContainer from '../NavContainer'
import FooterContainer from '../FooterContainer'

import PageTitle from '../../components/PageTitle'

class Login extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    resetPassword: PropTypes.func,
    signup: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
    }),
  }

  /**
   * Handles form submission with values
   */
  submit = values => {
    this.props.resetPassword({
      ...values,
      token: this.props.match.params.token,
    })
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <Fragment>
        <Fragment>{this.props.me.data.auth && <Redirect to="/" />}</Fragment>
        <NavContainer transparent />
        <div className="main-container">
          <PageTitle title="Login" />
          <section>
            <div className="container">
              <div className="col-md-6 col-md-push-3">
                <form
                  className="form-email"
                  onSubmit={handleSubmit(this.submit)}
                >
                  <h6 className="uppercase text-center">Reset Password</h6>
                  <Field
                    id="newPassword"
                    placeholder="New Password"
                    name="newPassword"
                    type="password"
                    className="validate-required"
                    component="input"
                  />
                  <button
                    style={{ width: '100%' }}
                    className="btn btn-lg btn-filled"
                    type="submit"
                  >
                    Reset Password
                  </button>
                </form>
                <div className="col-md-12 text-center">
                  <p>
                    <i>
                      <NavLink to="/login">Log in</NavLink>
                    </i>
                  </p>
                </div>
                <div className="col-md-12 text-center">
                  <p>
                    <i>
                      Dont Have an account?{' '}
                      <NavLink to="/signup">Sign Up</NavLink>
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
  }
}

const mapStateToProps = state => ({
  login: state.loginReducer,
  me: state.meReducer,
})

const mapDispatchToProps = dispatch => ({
  resetPassword: payload => dispatch(resetPassword(payload)),
})

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

const formed = reduxForm({
  form: 'login',
})(connected)

export default formed
