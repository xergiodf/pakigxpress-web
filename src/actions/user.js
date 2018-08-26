import { USER_SET, USER_UNSET } from '../actions/actionTypes'

const setUser = token => ({
  type: USER_SET,
  token,
})

const unsetUser = () => ({
  type: USER_UNSET,
})

export { setUser, unsetUser }
