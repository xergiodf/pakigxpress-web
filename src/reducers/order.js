import {
  USER_ORDERS_REQUEST_SUCCESS,
  USER_ORDERS_SUBMIT_SUCCESS,
  USER_ORDERS_ERROR
} from '../actions/actionTypes'

const initialState = {
  data: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_ORDERS_SUBMIT_SUCCESS:
      return { ...state, data: action.payload }

    case USER_ORDERS_REQUEST_SUCCESS:
      return { ...state, data: action.payload }

    case USER_ORDERS_ERROR:
      return initialState

    default:
      return state
  }
}
