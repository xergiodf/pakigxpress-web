import { call, put, all, takeLatest } from 'redux-saga/effects'
import {
  USER_ORDERS_REQUEST,
  USER_ORDERS_REQUEST_SUCCESS,
  USER_ORDERS_SUBMIT,
  USER_ORDERS_SUBMIT_SUCCESS,
  USER_ORDERS_ERROR,
  ALERT_ERROR,
  ALERT_SUCCESS
} from '../actions/actionTypes'
import { getOrdersByUser, postOrderByUser } from '../services/ordersApi'

const authUserOrdersRequest = function * authUserOrdersRequest (action) {
  try {
    const response = yield call(getOrdersByUser, action.payload)

    if (response.error) {
      yield put({ type: USER_ORDERS_ERROR, payload: response })
    } else {
      yield put({ type: USER_ORDERS_REQUEST_SUCCESS, payload: response })
    }
  } catch (e) {
    yield put({
      type: ALERT_ERROR,
      payload: {
        title: '',
        code: 0,
        description: e.message
      }
    })
  }
}

const submitUserOrder = function * submitUserOrder (action) {
  try {
    const response = yield call(postOrderByUser, action.payload)

    if (response.error) {
      yield put({ type: USER_ORDERS_ERROR, response })
    } else {
      yield put({
        type: ALERT_SUCCESS,
        payload: {
          description: `Package #${response.id} submitted!`
        }
      })
      yield put({ type: USER_ORDERS_SUBMIT_SUCCESS, response })
    }
  } catch (e) {
    yield put({
      type: ALERT_ERROR,
      payload: {
        title: '',
        code: 0,
        description: e.message
      }
    })
  }
}

const ordersWatcher = function * ordersWatcher () {
  return yield all([
    takeLatest(USER_ORDERS_REQUEST, authUserOrdersRequest),
    takeLatest(USER_ORDERS_SUBMIT, submitUserOrder)
  ])
}

export default ordersWatcher
