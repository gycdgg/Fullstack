import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import finalCreateStore from './store/configureStore'
import routes from './routes'
import { Provider } from 'react-redux'
import reducers from './reducers'
import initialState from './store/initState'

const store = finalCreateStore(reducers, initialState)
console.log('store', store, '222222222222', initialState)
const history = syncHistoryWithStore(browserHistory, store)
render(
  <Provider store = { store }>
    <Router history = { history } routes = { routes }/>
  </Provider>,
  document.getElementById('App')
)


