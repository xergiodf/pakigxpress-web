import { AUTH_REQUEST } from '../actions/actionTypes'

const loginRequest = payload => ({
  type: AUTH_REQUEST,
  payload
})

export default loginRequest
