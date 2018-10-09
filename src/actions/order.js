import {
  USER_ORDERS_REQUEST,
  USER_ORDERS_SUBMIT,
  ADMIN_ORDERS_REQUEST,
  USER_ORDER_UPDATE,
  ADMIN_ORDER_UPDATE
} from '../actions/actionTypes'

const authUserOrdersRequest = payload => ({
  type: USER_ORDERS_REQUEST,
  payload
})

const submitUserOrder = payload => ({ type: USER_ORDERS_SUBMIT, payload })

const authAdminOrdersRequest = payload => ({
  type: ADMIN_ORDERS_REQUEST,
  payload
})

const updateUserOrder = payload => ({ type: USER_ORDER_UPDATE, payload })

const updateAdminOrder = payload => ({ type: ADMIN_ORDER_UPDATE, payload })

export {
  authUserOrdersRequest,
  submitUserOrder,
  authAdminOrdersRequest,
  updateUserOrder,
  updateAdminOrder
}
