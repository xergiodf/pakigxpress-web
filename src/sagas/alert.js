import { toast } from 'react-toastify'
import { call, all, takeLatest } from 'redux-saga/effects'

import { ALERT_ERROR, ALERT_SUCCESS } from '../actions/actionTypes'

const showErrorAlert = function * showErrorAlert (action) {
  const { title, code, description } = action.payload
  yield call(toast.error, `${title}: (${code}) ${description}`)
}

const showSuccessAlert = function * showSuccessAlert (action) {
  const { description } = action.payload
  yield call(toast, description)
}

const watchAlertSaga = function * watchAlertSaga () {
  return yield all([
    takeLatest(ALERT_ERROR, showErrorAlert),
    takeLatest(ALERT_SUCCESS, showSuccessAlert)
  ])
}

export default watchAlertSaga
