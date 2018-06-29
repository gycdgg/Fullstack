import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Wrapper, Index, ProductWrapper, ProductList, Quote, Product, About } from './components'
import { Login, Layout }from './components/console'
import { NotFound } from './components/error_page'
import 'whatwg-fetch'

const checkAuth = (state, replace, next) => {
  //replace({ pathname: '/login' })
  // fetch('/api/admin/session', {
  //   method: 'GET',
  //   credentials: 'include'
  // }).then(res => res.json()).then(res => {
  //   console.log(res)
  //   // if(res.message !== 'Success') {
  //   //   replace({ pathname: '/login' })
  //   //   next()
  //   // }
  // }).catch(err => {
  //   console.log(err)
  //   replace({ pathname: '/login' })
  //   next()
  // })
}
let childRoutes =
  <Route name = "home" breadcrumbName = "Home" path="/" component={ Wrapper }>
    <IndexRoute component={ Index }/>
    <Route path = "/products" name = "Products" breadcrumbName = "Products" component = { ProductWrapper }>
      <IndexRoute component={ ProductList } breadcrumbName = "List"/>
      <Route path = ":id" name = "Product" breadcrumbName = "Product" component = { Product }/>
    </Route>
    <Route path = "/quote" name = "Get A Quote" breadcrumbName = "Get A Quote" component = {Quote}/>
    <Route path = "/about" name = "About us" breadcrumbName = "About us" component = {About}/>
    <Route path = "/login" component = { Login }/>
    <Route path = "/console"  component = {Layout} onEnter = {checkAuth}>
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
export default (childRoutes)