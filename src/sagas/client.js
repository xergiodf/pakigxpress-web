import { call, put, all, takeLatest } from 'redux-saga/effects'
import {
  CLIENTS_REQUEST,
  CLIENTS_REQUEST_SUCCESS,
  CLIENTS_REQUEST_ERROR,
  CLIENT_EDIT_REQUEST,
  CLIENT_EDIT_SUCCESS,
  CLIENT_EDIT_ERROR,
  ALERT_ERROR,
  ALERT_SUCCESS,
} from '../actions/actionTypes'

import { getClients, updateClient } from '../services/clientsApi'

/**
 * Retrieves a list of clients (admin-only)
 * @param {Object} action
 */
const getClientsRequest = function* clientsRequest(action) {
  try {
    const response = yield call(getClients, action.payload)

    if (response.error) {
      yield put({ type: CLIENTS_REQUEST_ERROR, payload: response })
    } else {
      yield put({ type: CLIENTS_REQUEST_SUCCESS, payload: response })
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
 * Updates client information
 * @param {Object} action
 */
const updateClientRequest = function* clientUpdate(action) {
  try {
    const response = yield call(updateClient, action.payload)

    if (response.error) {
      yield put({ type: CLIENT_EDIT_ERROR, payload: response })
    } else {
      yield put({ type: CLIENT_EDIT_SUCCESS, payload: response })
      // yield put({ type: })
      yield put({
        type: ALERT_SUCCESS,
        payload: {
          description: `Client #${response.id} updated!`,
        },
      })
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

const clientsWatcher = function* ordersWatcher() {
  return yield all([
    takeLatest(CLIENTS_REQUEST, getClientsRequest),
    takeLatest(CLIENT_EDIT_REQUEST, updateClientRequest),
  ])
}

export default clientsWatcher
