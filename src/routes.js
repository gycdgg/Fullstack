import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Wrapper, Index, ProductWrapper, ProductList, Quote, Product, About } from './components'
import { Login, Layout, ConsoleHome }from './components/console'
import { NotFound } from './components/error_page'
import fetch from '$fetch'

const checkAuth = (state, replace, next) => {
  fetch('/api/admin/session').then(res => {
    if(res.message !== 'Success') {
      replace({ pathname: '/login' })
      next()
    }
  })
  next()
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
      <IndexRoute component={ ConsoleHome }/>
      <Route  path = "home" name = "首页信息" breadcrumbName = "首页信息" component = { ConsoleHome }/>
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
export default (childRoutes)