import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import AsyncStorage from '@react-native-community/async-storage'

import UserReducer from './reducers/UserReducer';

const AppReducers = combineReducers({
  UserReducer,
});

const rootPersistConfig = {
  key: 'authType',
  storage: AsyncStorage,
  whitelist: ['UserReducer'],
  stateReconciler: hardSet
}

const store = createStore(
  persistReducer(rootPersistConfig,AppReducers),
  compose(applyMiddleware(thunk, logger))
)

const persistor = persistStore(store)

export { store, persistor }
