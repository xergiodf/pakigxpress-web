import {
  STATUS_ORDER_REQUEST,
  STATUS_PAYMENT_REQUEST,
} from '../actions/actionTypes'

const getOrderStatusListRequest = payload => ({
  type: STATUS_ORDER_REQUEST,
  payload,
})

const getPaymentStatusListRequest = payload => ({
  type: STATUS_PAYMENT_REQUEST,
  payload,
})

export { getOrderStatusListRequest, getPaymentStatusListRequest }
