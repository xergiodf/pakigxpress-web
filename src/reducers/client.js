import {
  CLIENTS_REQUEST_SUCCESS,
  CLIENTS_REQUEST_ERROR,
  CLIENT_EDIT_SUCCESS,
  CLIENT_EDIT_ERROR,
} from '../actions/actionTypes'

const initialState = {
  data: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLIENTS_REQUEST_SUCCESS:
      return { ...state, data: action.payload }

    case CLIENTS_REQUEST_ERROR:
      return initialState

    case CLIENT_EDIT_SUCCESS:
      return { ...state, data: action.payload }

    case CLIENT_EDIT_ERROR:
      return initialState

    default:
      return state
  }
}
