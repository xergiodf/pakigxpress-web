import { fork, all } from 'redux-saga/effects'

import alertSaga from './alert'
import clientSaga from './client'
import loginSaga from './login'
import orderSaga from './order'
import signupSaga from './signup'
import StatusSaga from './statuses'

const watchSagas = function* watchSagas() {
  yield all([
    fork(alertSaga),
    fork(clientSaga),
    fork(loginSaga),
    fork(orderSaga),
    fork(signupSaga),
    fork(StatusSaga),
  ])
}

export default watchSagas
