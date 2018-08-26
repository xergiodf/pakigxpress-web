import { USER_SET, USER_UNSET } from '../actions/actionTypes'

const initialState = {
  id: null,
  token: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET:
      return {
        id: action.id,
        token: action.token,
      }

    case USER_UNSET:
      return {
        id: null,
        token: null,
      }

    default:
      return state
  }
}

export default reducer
