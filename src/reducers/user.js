import {
  USER_SET,
  USER_UNSET,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_ERROR,
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_ERROR,
} from '../actions/actionTypes'

const initialState = {
  id: null,
  token: null,
  data: [],
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

    // Not necessary since I don't do anything with the response
    case USER_FORGOT_PASSWORD_SUCCESS:
      return { ...state, data: action.payload }

    case USER_RESET_PASSWORD_SUCCESS:
      return { ...state, data: action.payload }

    case USER_FORGOT_PASSWORD_ERROR:
      return initialState

    case USER_RESET_PASSWORD_ERROR:
      return initialState

    default:
      return state
  }
}

export default reducer
