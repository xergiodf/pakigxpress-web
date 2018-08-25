import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import reducers from '../../reducers'
import sagas from '../../sagas'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)))

  sagaMiddleware.run(sagas)
  const persistor = persistStore(store, null)

  return {
    store,
    persistor,
  }
}

export default configureStore
