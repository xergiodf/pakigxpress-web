import { fork, all } from 'redux-saga/effects'

import watchAlert from './alert'
import watchSignup from './signup'
import watchLogin from './login'

const watchSagas = function * watchSagas () {
  yield all([fork(watchAlert), fork(watchSignup), fork(watchLogin)])
}

export default watchSagas
