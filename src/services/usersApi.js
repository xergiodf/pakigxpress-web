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
      },
    },
    {
      requestType: 'login',
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

export { signup, login }
