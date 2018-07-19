import initialState from '../store/initState'
import {  CHANGE_TAB, CHANGE_PAGE, FETCH_SUCCESS } from '../actions/product'

export default function product(state = initialState.product, action) {
  switch(action.type) {
  case FETCH_SUCCESS: 
    return Object.assign({}, state, action.payload)
  case CHANGE_PAGE:
    return Object.assign({}, state, action.payload)
  default: return state
  }
}