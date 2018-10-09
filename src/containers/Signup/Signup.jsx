import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import signupRequest from '../../actions/signup'

import NavContainer from '../NavContainer'
import FooterContainer from '../FooterContainer'

import { PageTitle } from '../../components/'

class Signup extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    signupRequest: PropTypes.func,
    signup: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool
    })
  }

  /**
   * Handles form submission with values
   */
  submit = values => {
    this.props.signupRequest(values)
  }

  render () {
    const { handleSubmit, signup: { requesting, successful } } = this.props

    return (
      <Fragment>
        <NavContainer transparent />
        <div className='main-container'>
          <PageTitle title='Sign Up' />
          <section>
            <div className='container'>
              <div className='col-md-6 col-md-push-3'>
                <form
                  className='form-email'
                  onSubmit={handleSubmit(this.submit)}
                >
                  <h6 className='uppercase text-center'>Sign Up</h6>
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
                  <Field
                    id='confirmPassword'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    type='password'
                    className='validate-required'
                    component='input'
                  />
                  <hr />
                  <Field
                    id='fullName'
                    placeholder='Full Name'
                    name='name'
                    type='text'
                    className='validate-required'
                    component='input'
                  />
                  <Field
                    id='phone'
                    name='phone'
                    placeholder='Phone Number'
                    type='text'
                    className='validate-required'
                    component='input'
                  />
                  <Field
                    id='address_1'
                    name='address_1'
                    placeholder='Address Line 1'
                    type='text'
                    className='validate-required'
                    component='input'
                  />
                  <Field
                    id='address_2'
                    name='address_2'
                    placeholder='Address Line 2'
                    type='text'
                    className='validate-required'
                    component='input'
                  />
                  <Field
                    id='city'
                    name='city'
                    placeholder='City'
                    type='text'
                    className='validate-required'
                    component='input'
                  />
                  <Field
                    id='state'
                    name='state'
                    placeholder='State'
                    type='text'
                    className='validate-required'
                    component='input'
                  />
                  <Field
                    id='zip'
                    name='zip'
                    placeholder='Zip Code'
                    type='text'
                    className='validate-required'
                    component='input'
                  />
                  <button
                    style={{ width: '100%' }}
                    className='btn btn-lg btn-filled'
                    type='submit'
                  >
                    Sign Up
                  </button>
                </form>
                <div className='col-md-12 text-center'>
                  <p>
                    <i>
                      Already have an account?{' '}
                      <NavLink to='/login'>Log in</NavLink>
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
  signup: state.signupReducer
})

const mapDispatchToProps = dispatch => ({
  signupRequest: payload => dispatch(signupRequest(payload))
})

const connected = connect(mapStateToProps, mapDispatchToProps)(Signup)

// Connect our connected component to Redux Form.  It will namespace
// the form we use in this component as `signup`.
const formed = reduxForm({
  form: 'signup'
})(connected)

export default formed
