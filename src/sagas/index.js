import { fork, all } from 'redux-saga/effects'

import watchAlert from './alert'
import watchSignup from './signup'
import watchLogin from './login'
import watchOrder from './order'
import watchClient from './client'

const watchSagas = function * watchSagas () {
  yield all([
    fork(watchAlert),
    fork(watchSignup),
    fork(watchLogin),
    fork(watchOrder),
    fork(watchClient)
  ])
}

export default watchSagas
