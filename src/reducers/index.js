import { reducer as form } from 'redux-form'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import clientReducer from './client'
import loginReducer from './login'
import meReducer from './me'
import orderReducer from './order'
import requestReducer from './request'
import signupReducer from './signup'
import userReducer from './user'

const config = {
  key: 'root',
  storage,
  whitelist: ['meReducer'],
}

const reducers = persistCombineReducers(config, {
  clientReducer,
  form,
  loginReducer,
  meReducer,
  orderReducer,
  requestReducer,
  signupReducer,
  userReducer,
})

export default reducers
