import { USER_ORDERS_REQUEST, USER_ORDERS_SUBMIT } from '../actions/actionTypes'

const authUserOrdersRequest = payload => ({
  type: USER_ORDERS_REQUEST,
  payload
})

const submitUserOrder = payload => ({
  type: USER_ORDERS_SUBMIT,
  payload
})

export { authUserOrdersRequest, submitUserOrder }
