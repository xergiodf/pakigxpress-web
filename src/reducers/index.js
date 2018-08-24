import { reducer as form } from 'redux-form';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const config = {
  key: 'root',
  storage,
  whitelist: ['me', 'form'],
};

const reducers = persistCombineReducers(config, {
  form,
});

export default reducers;
