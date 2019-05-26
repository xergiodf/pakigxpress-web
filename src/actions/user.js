import {
  USER_SET,
  USER_UNSET,
  USER_FORGOT_PASSWORD,
  USER_RESET_PASSWORD,
} from '../actions/actionTypes'

const setUser = token => ({
  type: USER_SET,
  token,
})

const unsetUser = () => ({
  type: USER_UNSET,
})

const forgotPassword = payload => ({ type: USER_FORGOT_PASSWORD, payload })

const resetPassword = payload => ({ type: USER_RESET_PASSWORD, payload })

export { forgotPassword, resetPassword, setUser, unsetUser }
