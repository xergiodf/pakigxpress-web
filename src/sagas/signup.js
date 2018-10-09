import { call, put, takeLatest } from 'redux-saga/effects'
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  ALERT_ERROR,
  ALERT_SUCCESS
} from '../actions/actionTypes'
import { signup } from '../services/usersApi'

const signupFlow = function * signupFlow (action) {
  try {
    const response = yield call(signup, action.payload)

    if (response.error) {
      yield put({ type: SIGNUP_ERROR, payload: response })
    } else {
      yield put({
        type: ALERT_SUCCESS,
        payload: {
          description: `Successfully registered. ${response.fullName} you can login now!`
        }
      })
      yield put({ type: SIGNUP_SUCCESS, response })
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

const signupWatcher = function * signupWatcher () {
  yield takeLatest(SIGNUP_REQUEST, signupFlow)
}

export default signupWatcher
