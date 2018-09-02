import { AUTH_REQUEST, LOGOUT_REQUEST } from '../actions/actionTypes'

const loginRequest = payload => ({
  type: AUTH_REQUEST,
  payload
})

const logoutRequest = payload => ({
  type: LOGOUT_REQUEST,
  payload
})

export { loginRequest, logoutRequest }
