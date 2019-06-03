import { call, put, all, takeLatest } from 'redux-saga/effects'
import {
  STATUS_ORDER_REQUEST,
  STATUS_ORDER_REQUEST_SUCCESS,
  STATUS_PAYMENT_REQUEST,
  STATUS_PAYMENT_REQUEST_SUCCESS,
  ALERT_ERROR,
} from '../actions/actionTypes'
import { getOrderStatusList, getPaymentStatusList } from '../services/utilsApi'

/**
 * Get a list of order status
 */
const getOrderStatusListRequest = function* getOrderStatusListRequest() {
  try {
    const response = yield call(getOrderStatusList)
    yield put({ type: STATUS_ORDER_REQUEST_SUCCESS, payload: response })
  } catch (e) {
    yield put({
      type: ALERT_ERROR,
      payload: {
        title: '',
        code: 0,
        description: e.message,
      },
    })
  }
}

/**
 * Get a list of payment status
 */
const getPaymentStatusListRequest = function* getPaymentStatusListRequest() {
  try {
    const response = yield call(getPaymentStatusList)
    yield put({ type: STATUS_PAYMENT_REQUEST_SUCCESS, payload: response })
  } catch (e) {
    yield put({
      type: ALERT_ERROR,
      payload: {
        title: '',
        code: 0,
        description: e.message,
      },
    })
  }
}

const statusesWatcher = function* statusesWatcher() {
  return yield all([
    takeLatest(STATUS_ORDER_REQUEST, getOrderStatusListRequest),
    takeLatest(STATUS_PAYMENT_REQUEST, getPaymentStatusListRequest),
  ])
}

export default statusesWatcher
