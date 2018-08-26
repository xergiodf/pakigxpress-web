import { reducer as form } from 'redux-form'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user'
import signupReducer from './signup'

const config = {
  key: 'root',
  storage,
  whitelist: ['form'],
}

const reducers = persistCombineReducers(config, {
  form,
  userReducer,
  signupReducer,
})

export default reducers
