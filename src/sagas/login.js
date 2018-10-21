import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  USER_UNSET,
  STATUS_ORDER_REQUEST,
  STATUS_PAYMENT_REQUEST,
  ALERT_ERROR,
  ALERT_SUCCESS,
} from '../actions/actionTypes'
import { setUser, unsetUser } from '../actions/user'
import { login } from '../services/usersApi'

const loginFlow = function* loginFlow(action) {
  let response
  try {
    response = yield call(login, action.payload)

    if (response.error) {
      yield put({ type: AUTH_ERROR, response })
    } else {
      // set token via action creator setUser
      yield put(setUser(response.token))

      // toast
      yield put({
        type: ALERT_SUCCESS,
        payload: {
          description: `Welcome ${response.full_name}!`,
        },
      })

      // Redux
      yield put({ type: AUTH_SUCCESS, payload: { auth: true, ...response } })
      yield put({ type: STATUS_ORDER_REQUEST })
      yield put({ type: STATUS_PAYMENT_REQUEST })
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

    // Send error to redux
    yield put({ type: AUTH_ERROR, e })
  } finally {
    if (yield cancelled()) {
    }
  }

  return response.token
}

const logout = function* logout() {
  yield put(unsetUser())
  localStorage.removeItem('token')
}

const loginWatcher = function* loginWatcher() {
  while (true) {
    const payload = yield take(AUTH_REQUEST)
    const task = yield fork(loginFlow, payload)
    const action = yield take([USER_UNSET, AUTH_ERROR, AUTH_REQUEST])
    if (action.type === USER_UNSET) yield cancel(task)
    yield call(logout)
  }
}

export default loginWatcher
