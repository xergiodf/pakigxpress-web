import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'

import { forgotPassword } from '../../actions/user'

import NavContainer from '../NavContainer'
import FooterContainer from '../FooterContainer'

import PageTitle from '../../components/PageTitle'

class ForgotPassword extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    forgotPassword: PropTypes.func,
    signup: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
    }),
  }

  /**
   * Handles form submission with values
   */
  submit = values => {
    this.props.forgotPassword(values)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <Fragment>
        <Fragment>{this.props.me.data.auth && <Redirect to="/" />}</Fragment>
        <NavContainer transparent />
        <div className="main-container">
          <PageTitle title="Forgot Password" />
          <section>
            <div className="container">
              <div className="col-md-6 col-md-push-3">
                <form
                  className="form-email"
                  onSubmit={handleSubmit(this.submit)}
                >
                  <h6 className="uppercase text-center">Forgot Password</h6>
                  <Field
                    id="email"
                    placeholder="Email"
                    name="email"
                    type="text"
                    className="validate-required validate-email"
                    component="input"
                  />
                  <button
                    style={{ width: '100%' }}
                    className="btn btn-lg btn-filled"
                    type="submit"
                  >
                    Send recovery email
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
  forgotPassword: payload => dispatch(forgotPassword(payload)),
})

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword)

const formed = reduxForm({
  form: 'login',
})(connected)

export default formed
