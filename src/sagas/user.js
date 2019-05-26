import { call, put, all, takeLatest } from 'redux-saga/effects'
import {
  ALERT_ERROR,
  ALERT_SUCCESS,
  USER_FORGOT_PASSWORD,
  USER_FORGOT_PASSWORD_ERROR,
  USER_RESET_PASSWORD,
  USER_RESET_PASSWORD_ERROR,
} from '../actions/actionTypes'
import { forgotPassword, resetPassword } from '../services/usersApi'

/**
 * Request a password reset link
 */
const forgotPasswordReq = function* forgotPasswordReq(action) {
  try {
    const response = yield call(forgotPassword, action.payload)

    if (response.error)
      yield put({ type: USER_FORGOT_PASSWORD_ERROR, payload: response })
    else
      yield put({
        type: ALERT_SUCCESS,
        payload: {
          description: `We've sent you a recovery link!'`,
        },
      })
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
 * Submits a password reset
 */
const resetPasswordReq = function* resetPasswordReq(action) {
  try {
    const response = yield call(resetPassword, action.payload)

    if (response.error)
      yield put({ type: USER_RESET_PASSWORD_ERROR, payload: response })
    else
      yield put({
        type: ALERT_SUCCESS,
        payload: {
          description: 'Password successfully reseted!',
        },
      })
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

const usersWatcher = function* usersWatcher() {
  return yield all([
    takeLatest(USER_FORGOT_PASSWORD, forgotPasswordReq),
    takeLatest(USER_RESET_PASSWORD, resetPasswordReq),
  ])
}

export default usersWatcher
