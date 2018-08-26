import { fork, all } from 'redux-saga/effects'

import watchAlert from './alert'
import watchSignup from './signup'

const watchSagas = function* watchSagas() {
  yield all([fork(watchAlert), fork(watchSignup)])
}

export default watchSagas
