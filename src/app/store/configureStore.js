import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { isDevelopment } from '../helpers/environment'
import authReducer from './auth/reducer'

export default (initialState = {}) => createStore(
  combineReducers({
    auth: authReducer
  }),
  initialState,
  isDevelopment ? applyMiddleware(logger) : applyMiddleware()
)
