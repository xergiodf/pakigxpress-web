import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from '../actions/actionTypes'

const initialState = {
  requesting: false,
  successful: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        requesting: true,
        successful: false,
      }

    case SIGNUP_SUCCESS:
      return {
        requesting: false,
        successful: true,
      }

    case SIGNUP_ERROR:
      return {
        requesting: false,
        successful: false,
      }

    default:
      return state
  }
}

export default reducer
