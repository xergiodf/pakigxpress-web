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

const login = () => ({})

export { signup, login }
