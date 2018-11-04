import { call, put, all, takeLatest } from 'redux-saga/effects'
import {
  USER_ORDERS_REQUEST,
  USER_ORDERS_REQUEST_SUCCESS,
  USER_ORDERS_SUBMIT,
  USER_ORDERS_SUBMIT_SUCCESS,
  USER_ORDERS_ERROR,
  ADMIN_ORDERS_REQUEST,
  ADMIN_ORDERS_REQUEST_SUCCESS,
  ADMIN_ORDERS_ERROR,
  ALERT_ERROR,
  ALERT_SUCCESS,
  USER_ORDER_UPDATE_SUCCESS,
  ADMIN_ORDER_UPDATE_SUCCESS,
  USER_ORDER_UPDATE,
  ADMIN_ORDER_UPDATE,
} from '../actions/actionTypes'
import {
  getOrdersByUser,
  postOrderByUser,
  getOrdersByAdmin,
  updateOrderByUser,
  updateOrderByAdmin,
} from '../services/ordersApi'

/**
 * Retrieves authenticated user's orders
 * @param {Object} action
 */
const authUserOrdersRequest = function* authUserOrdersRequest(action) {
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
        description: e.message,
      },
    })
  }
}

/**
 * Retrieves all orders
 * @param {Object} action
 */
const authAdminOrdersRequest = function* authAdminOrdersRequest(action) {
  try {
    const response = yield call(getOrdersByAdmin, action.payload)

    if (response.error) {
      yield put({ type: ADMIN_ORDERS_ERROR, payload: response })
    } else {
      yield put({ type: ADMIN_ORDERS_REQUEST_SUCCESS, payload: response })
    }
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
 * Submit an order for the authenticated user
 * @param {Object} action
 */
const submitUserOrder = function* submitUserOrder(action) {
  try {
    const response = yield call(postOrderByUser, action.payload)

    if (response.error) {
      yield put({ type: USER_ORDERS_ERROR, response })
    } else {
      yield put({
        type: ALERT_SUCCESS,
        payload: {
          description: `Package #${response.id} submitted!`,
        },
      })
      yield put({ type: USER_ORDERS_SUBMIT_SUCCESS, response })
      yield put({ type: ADMIN_ORDERS_REQUEST })
    }
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
 * Updates an order for the authenticated user
 * @param {Object} action
 */
const updateUserOrder = function* updateUserOrder(action) {
  try {
    const response = yield call(updateOrderByUser, action.payload)

    if (response.error) {
      yield put({ type: USER_ORDERS_ERROR, response })
    } else {
      yield put({
        type: ALERT_SUCCESS,
        payload: {
          description: `Order #${response.id} updated!`,
        },
      })
      yield put({ type: USER_ORDER_UPDATE_SUCCESS, response })
      yield window.location.reload()
    }
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
 * Updated an order using admin privileges
 * @param {Object} action
 */
const updateAdminOrder = function* updateAdminOrder(action) {
  try {
    const response = yield call(updateOrderByAdmin, action.payload)

    if (response.error) {
      yield put({ type: USER_ORDERS_ERROR, response })
    } else {
      yield put({
        type: ALERT_SUCCESS,
        payload: {
          description: `Order #${response.id} updated!`,
        },
      })
      yield put({ type: ADMIN_ORDER_UPDATE_SUCCESS, response })
      yield window.location.reload()
    }
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

const ordersWatcher = function* ordersWatcher() {
  return yield all([
    takeLatest(USER_ORDERS_REQUEST, authUserOrdersRequest),
    takeLatest(USER_ORDERS_SUBMIT, submitUserOrder),
    takeLatest(ADMIN_ORDERS_REQUEST, authAdminOrdersRequest),
    takeLatest(USER_ORDER_UPDATE, updateUserOrder),
    takeLatest(ADMIN_ORDER_UPDATE, updateAdminOrder),
  ])
}

export default ordersWatcher
