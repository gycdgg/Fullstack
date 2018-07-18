// reducers/index.js
import { combineReducers } from 'redux' // 利用combineReducers 合并reducers
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import product from './product'

export default combineReducers({
  routing: routerReducer,
  product: product
})