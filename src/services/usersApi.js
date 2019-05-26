import request from './request'

const signup = payload =>
  request(
    {
      url: 'user/signup',
      method: 'POST',
      data: {
        fullName: payload.name,
        email: payload.email,
        password: payload.password,
        phone: payload.phone,
        address_1: payload.address_1,
        address_2: payload.address_2,
        city: payload.city,
        state: payload.state,
        zip: payload.zip,
      },
    },
    {
      requestType: 'signup',
    }
  )

const login = payload =>
  request(
    {
      url: 'user/auth',
      method: 'POST',
      data: {
        email: payload.email,
        password: payload.password,
      },
    },
    {
      requestType: 'login',
    }
  )

const forgotPassword = ({ email }) =>
  request(
    {
      url: `user/forgotPassword?email=${email}`,
      method: 'GET',
    },
    { requestType: 'forgotPassword' }
  )

const resetPassword = ({ token, newPassword }) =>
  request(
    {
      url: 'user/resetPassword',
      method: 'POST',
      data: {
        token,
        newPassword,
      },
    },
    { requestType: 'resetPassword' }
  )

export { forgotPassword, login, resetPassword, signup }
