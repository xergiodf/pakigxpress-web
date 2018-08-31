import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR } from '../actions/actionTypes'

const initialState = {
  requesting: false,
  successful: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        requesting: true,
        successful: false
      }

    case AUTH_SUCCESS:
      return {
        requesting: false,
        successful: true
      }

    case AUTH_ERROR:
      return initialState

    default:
      return state
  }
}

export default reducer
