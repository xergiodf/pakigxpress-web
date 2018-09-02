import { reducer as form } from 'redux-form'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user'
import signupReducer from './signup'
import loginReducer from './login'
import meReducer from './me'
import orderReducer from './order'

const config = {
  key: 'root',
  storage,
  whitelist: ['meReducer']
}

const reducers = persistCombineReducers(config, {
  form,
  userReducer,
  signupReducer,
  loginReducer,
  meReducer,
  orderReducer
})

export default reducers
