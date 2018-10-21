import {
  STATUS_ORDER_REQUEST_SUCCESS,
  STATUS_PAYMENT_REQUEST_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  orders: [],
  payments: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case STATUS_ORDER_REQUEST_SUCCESS:
      return { ...state, orders: action.payload }

    case STATUS_PAYMENT_REQUEST_SUCCESS:
      return { ...state, payments: action.payload }

    default:
      return state
  }
}
