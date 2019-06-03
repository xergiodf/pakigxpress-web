import { fork, all } from 'redux-saga/effects'

import alertSaga from './alert'
import clientSaga from './client'
import loginSaga from './login'
import orderSaga from './order'
import signupSaga from './signup'
import statusSaga from './statuses'
import userSaga from './user'

const watchSagas = function* watchSagas() {
  yield all([
    fork(alertSaga),
    fork(clientSaga),
    fork(loginSaga),
    fork(orderSaga),
    fork(signupSaga),
    fork(statusSaga),
    fork(userSaga),
  ])
}

export default watchSagas
