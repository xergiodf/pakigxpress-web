import { SIGNUP_REQUEST } from '../actions/actionTypes'

const signupRequest = payload => ({
  type: SIGNUP_REQUEST,
  payload,
})

export default signupRequest
