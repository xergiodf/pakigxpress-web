import {
  USER_ORDERS_REQUEST_SUCCESS,
  USER_ORDERS_SUBMIT_SUCCESS,
  USER_ORDERS_ERROR,
  ADMIN_ORDERS_ERROR,
  ADMIN_ORDERS_REQUEST_SUCCESS,
  USER_ORDER_UPDATE_SUCCESS,
  ADMIN_ORDER_UPDATE_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_ORDERS_SUBMIT_SUCCESS:
      return { ...state, data: action.payload }

    case USER_ORDERS_REQUEST_SUCCESS:
      return { ...state, data: action.payload }

    case ADMIN_ORDERS_REQUEST_SUCCESS:
      return { ...state, data: action.payload }

    case USER_ORDERS_ERROR:
      return initialState

    case ADMIN_ORDERS_ERROR:
      return initialState

    case USER_ORDER_UPDATE_SUCCESS:
      return { ...state, data: action.payload }

    case ADMIN_ORDER_UPDATE_SUCCESS:
      return { ...state, data: action.payload }

    default:
      return state
  }
}
