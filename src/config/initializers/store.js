import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import reducers from '../../reducers'
import sagas from '../../sagas'

/* eslint-disable no-underscore-dangle */
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
  /* eslint-enable */

  sagaMiddleware.run(sagas)
  const persistor = persistStore(store, null)

  return {
    store,
    persistor,
  }
}

export default configureStore
