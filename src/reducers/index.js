import { reducer as form } from 'redux-form'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import clientReducer from './client'
import loginReducer from './login'
import meReducer from './me'
import orderReducer from './order'
import requestReducer from './request'
import signupReducer from './signup'
import statusReducer from './statuses'
import userReducer from './user'

const config = {
  key: 'root',
  storage,
  whitelist: ['meReducer', 'statusReducer'],
}

const reducers = persistCombineReducers(config, {
  clientReducer,
  form,
  loginReducer,
  meReducer,
  orderReducer,
  requestReducer,
  signupReducer,
  statusReducer,
  userReducer,
})

export default reducers
