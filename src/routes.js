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
  }).catch(() => {
    replace({ pathname: '/login' })
    next()
  })
  next()
}
let childRoutes =
  <Route breadcrumbName = "Home" component = { Wrapper } name = "home" path = "/">
    <IndexRoute component = { Index }/>
    <Route breadcrumbName = "Products" component = { ProductWrapper } name = "Products" path = "/products">
      <IndexRoute breadcrumbName = "List" component = { ProductList }/>
      <Route breadcrumbName = "Product" component = { Product } name = "Product" path = ":id"/>
    </Route>
    <Route breadcrumbName = "Get A Quote" component = { Quote } name = "Get A Quote" path = "/quote"/>
    <Route breadcrumbName = "About us" component = { About } name = "About us" path = "/about"/>
    <Route component = { Login } path = "/login"/>
    <Route component = { Layout }  onEnter = { checkAuth } path = "/console">
      <IndexRoute component = { ConsoleHome }/>
      <Route  breadcrumbName = "首页信息" component = { ConsoleHome } name = "首页信息" path = "home"/>
    </Route>
    <Route component = { NotFound } path = "*" />
  </Route>
export default (childRoutes)