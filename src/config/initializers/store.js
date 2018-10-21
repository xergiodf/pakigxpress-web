import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import ENV from '../constants/env'

import reducers from '../../reducers'
import sagas from '../../sagas'

/* eslint-disable no-underscore-dangle */
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  let composeEnhancers = compose

  if (ENV.DEBUG.REDUX) {
    composeEnhancers = composeWithDevTools
  }

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  )
  /* eslint-enable */

  sagaMiddleware.run(sagas)
  const persistor = persistStore(store)

  return {
    store,
    persistor,
  }
}

export default configureStore
