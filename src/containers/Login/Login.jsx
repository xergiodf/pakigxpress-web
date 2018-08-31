import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'

import loginRequest from '../../actions/login'

import NavContainer from '../NavContainer'
import FooterContainer from '../FooterContainer'

import PageTitle from '../../components/PageTitle'

class Login extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    loginRequest: PropTypes.func,
    signup: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool
    })
  }

  /**
   * Handles form submission with values
   */
  submit = values => {
    this.props.loginRequest(values)
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <Fragment>
        <Fragment>
          {this.props.me.data.auth && <Redirect to='/' />}
        </Fragment>
        <NavContainer transparent />
        <div className='main-container'>
          <PageTitle title='Login' />
          <section>
            <div className='container'>
              <div className='col-md-6 col-md-push-3'>
                <form
                  className='form-email'
                  onSubmit={handleSubmit(this.submit)}
                >
                  <h6 className='uppercase text-center'>Log In</h6>
                  <Field
                    id='email'
                    placeholder='Email'
                    name='email'
                    type='text'
                    className='validate-required validate-email'
                    component='input'
                  />
                  <Field
                    id='password'
                    placeholder='Password'
                    name='password'
                    type='password'
                    className='validate-required'
                    component='input'
                  />
                  <button
                    style={{ width: '100%' }}
                    className='btn btn-lg btn-filled'
                    type='submit'
                  >
                    Log in
                  </button>
                </form>
                <div className='col-md-12 text-center'>
                  <p>
                    <i>
                      Dont Have an account?
                      {' '}
                      <NavLink to='/signup'>Sign Up</NavLink>
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
  me: state.meReducer
})

const mapDispatchToProps = dispatch => ({
  loginRequest: payload => dispatch(loginRequest(payload))
})

const connected = connect(mapStateToProps, mapDispatchToProps)(Login)

const formed = reduxForm({
  form: 'login'
})(connected)

export default formed
